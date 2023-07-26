//create mini-express app(A router)
const exp=require('express')

const userApp=exp.Router() //capable of handing all routes


const expressAsyncHandler = require('express-async-handler')
//this handles the errors and hand overs the errors to err handling mw

const bycryptjs=require('bcryptjs')

const jwt=require('jsonwebtoken')

const verifyToken=require("./middlewares/verifyToken")

//import multerObj
const multerObj=require("./middlewares/cloudinaryConfig")
require('dotenv').config()



//create user 
//make this public route
userApp.use(exp.json())
userApp.post(
    "/user-signup",
    multerObj.single('photo'),
    //single used to upload single img
    //for multiple images we can use .array('photo',12(just the count))
    expressAsyncHandler(async (request,response)=>{

    //get userCollectionObj
    const userCollectionObj= request.app.get("userCollectionObj")

    //get newUser from request
    const newUser=JSON.parse(request.body.user) //convert string to object

    //check for duplicate user by username
    let userOfDB=await userCollectionObj.findOne({username:newUser.username})
    //if user already existed, send res to client "user exists"
    if(userOfDB!=null){
        response.status(200).send({message:"User already existed"})
    }
    //if user not exists
    else{
        //add cdn link of cloudinary image to userobj
        newUser.image=request.file.path;
        //hash the password
        let hashedPassword=await bycryptjs.hash(newUser.password,5) //2nd arg gives no of times to be hashed
        //console.log(hashedPassword)

        //replace plain pass with hashed pass
        newUser.password=hashedPassword
        //insert user
        await userCollectionObj.insertOne(newUser)
        //send res
        response.status(201).send({message:"User created"})

    } 


}))


//get user by username
//make it as private route
userApp.get(
    "/get-user/:username",verifyToken,
    expressAsyncHandler(async (request,response)=>{

    //get userCollectionObj
    const userCollectionObj=request.app.get('userCollectionObj')

    //get userid from url
    let usernameFromUrl=(request.params.username)

    //find user by username
    const userOfDB=await userCollectionObj.findOne({username:usernameFromUrl})

    //if user not existed
    if(userOfDB===null){
        response.status(200).send({message:"user not found"})
    }
    else{
        //remove password from userOfDB
        delete userOfDB.password 

        response.status(200).send({message:"user",payload:userOfDB})

    }

    
    
     
   
}))

//every api has some public routes and private routes
//public routes
    //searching product
    //get selected product id or name
    //get reviews of a product


//Private route
    //write review   
    //buy now 

userApp.use(exp.json())
//user login
userApp.post(
    "/user-login",
    expressAsyncHandler(async(request,response)=>{
    // console.log(request.headers)

    //get collection
    const userCollectionObj=request.app.get('userCollectionObj')

    //get user cred from req
    const userCredObj=request.body
    //console.log(userCredObj)
    
    //verify username
    let userOfDB=await userCollectionObj.findOne({username:userCredObj.username})
    //if username is invalid
    if(userOfDB===null){
        response.status(200).send({message:"invalid username"})
    }
    //if username is valid
    else{
        //verify password
        //hash the password and compare with existing password in db
        let isEqual=await bycryptjs.compare(userCredObj.password,userOfDB.password)
        if(isEqual===false){
            response.status(200).send({message:"invalid password"})

        }
        //if password also matched
        else{
            //create a jwt token
            let jwtToken=jwt.sign({username:userOfDB.username},process.env.SECRET_KEY,{expiresIn:20})//create and encode token it is sync no await

            //send token in response
            delete userOfDB.password
            response.status(200).send({message:"success",token:jwtToken,user:userOfDB})

        }

    }
}))

userApp.get('/test',verifyToken,(request,response)=>{
    //console.log(request.headers)
    response.send({message:"private route"})
})

//export userApp
module.exports=userApp
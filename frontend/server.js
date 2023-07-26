//create express app
const exp=require('express')


//console.log(exp) // to know what is exported fom module to variable exp

const app=exp() //Calls the function and returns an express object stored in app
require('dotenv').config()
//assign port number
//... express object internally contains http server
app.listen(3500,()=>{
    console.log("web server listening in 3500")
})


//import path module
const path=require("path")
//Connect react build
app.use(exp.static(path.join(__dirname,'./build')))
//__dirnmae path of correct fo;der





//get mongo client
const mclient=require("mongodb").MongoClient

//connext to db server using mongo client
mclient
    .connect("mongodb://127.0.0.1:27017")
    .then((dbRef)=>{
        //connecct to a database
        const dbObj=dbRef.db('b1db')

        //connect to collections of this database
        const userCollectionObj=dbObj.collection("userscollection")
        

        //share collections to APIs
        app.set('userCollectionObj',userCollectionObj)
        


        console.log("db connection success")
    })
    .catch((err)=>console.log("database connect error:",err))

//import userApp
const userApp=require('./APIs/usersApi')

const { request } = require('http')


//execute user api when the path is /user-api
app.use('/user-api',userApp)





//middleware to deal with page refresh
const pageRefresh=(request,response,next)=>{
    response.sendFile(path.join(__dirname,'./build/index.html'))
}
app.use("*",pageRefresh)

//or you can use this below code both work just fine
/* //page refresh
app.use("/*",(req,res,next)=>{
    res.sendFile(path.join(__dirname,'./build/index.html'),err=>{
        if(err){
            next(err)
        }
    })
}) */






//dealing with invalid paths with normal mw
const invalidPathMiddleware=(request,response,next)=>{
    response.send({message:"Invalid path"})
}

//using this middleware only when request matches with *
//note that * matches valid with any path
//so we write this at the end so that if the request doesn't match with any paths in the above req handlers
//..it will finally match with * and sends response as invalid path
app.use("*",invalidPathMiddleware)





//dealing with errors using error handling middleware
const errorHandlingMiddleware=(error,request,response,next)=>{
    response.send({message: error.message})
}

//using this for all the requests
app.use(errorHandlingMiddleware)
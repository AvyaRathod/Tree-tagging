import React from 'react'
import { useState } from 'react'
import { LoginContext } from './LoginContext'
import axios from 'axios'



function UserLoginStore({children}) {
    let [currentUser,setCurrentUser]=useState({})
    let [loginErr,setLoginErr]=useState("")
    let [userLoginStatus,setUserLoginStatus]=useState(false)

    
    //function to make user login request
    const loginUser=(userCredentialsObj)=>{

        axios
        .post("http://localhost:3500/user-api/user-login",userCredentialsObj)
        .then((response)=>{
            console.log(response)
            if(response.data.message==="success"){
                //navigate to user profile/dashboard
                localStorage.setItem("token",response.data.token)
                setCurrentUser({...response.data.user})
                setLoginErr("")
                console.log("navigated to user profile")
                setUserLoginStatus(true)

            }else{
                
                setLoginErr(response.data.message)
            }


        })
        .catch((err)=>{
            console.log("err in user login ",err)
            setLoginErr(err.message)
        })
    }
    const logoutUser=()=>{
        localStorage.clear()
        setUserLoginStatus(false)
    }
    return(
        <LoginContext.Provider value={[currentUser,loginErr,userLoginStatus,loginUser,logoutUser]} >
            {children}
        </LoginContext.Provider>
        //context provider take value attribute but not store

    )


    
  
}

export default UserLoginStore
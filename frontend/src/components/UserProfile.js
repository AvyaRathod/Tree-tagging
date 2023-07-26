import React from 'react'
import './UserProfile.css'
import { useContext } from 'react'
import { loginContext } from '../contexts/LoginContext'
import { NavLink, Outlet } from 'react-router-dom'

function UserProfile() {
    let [currentUser]=useContext(loginContext)
  return (
    <div className="container">
        <div className="row">
            <div className="col-sm-4">
            <img src={currentUser.image} width="60px" alt="" className='float-end rounded p-2' />
            <p className="display-3 text-end text-dark fs-bold">
                WELCOME {currentUser.username}
            </p>
            <p className="lead text-dark text-start">
            <small>
            email:{currentUser.email}
            </small> 
            </p>
            </div>
            <div className="col-sm-8">

            </div>
        </div>
        
        
        

        
        <Outlet/>
    </div>
    
  )
}

export default UserProfile
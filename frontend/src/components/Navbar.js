import React from 'react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { LoginContext } from '../contexts/loginContext'

function Navbar() {
    let [currentUser,loginErr,userLoginStatus,loginUser,logoutUser] = useContext(LoginContext)
  return (
    <div className='bg-dark'>
        <ul className="nav justify-content-center">
            <li className="nav-item ">
                <NavLink className="nav-link text-white" to="/" >
                    Home
                </NavLink>
            </li>
            <li className="nav-item ">
                <NavLink className="nav-link text-white" to="/Signup" >
                    Signup
                </NavLink>
            </li>

            {/* //conditional rendering */}

            {userLoginStatus?(
                <li className="nav-item">
                <NavLink onClick={logoutUser} className="nav-link text-white" to="/Signin" >
                    Signout
                </NavLink>
            </li>
            ):(
            <li className="nav-item">
                <NavLink className="nav-link text-white" to="/Signin" >
                    Signin
                </NavLink>
            </li>
            
            )}
            
        </ul>

    </div>
  )
}

export default Navbar
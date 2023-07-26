import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../contexts/loginContext";

function Signin() {
  // let [currentUser,loginErr,userLoginStatus,loginUser]=(useContext(LoginContext))

  let [error, setError] = useState("");

  const navigate = useNavigate();

  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // let handleSubmitUser=(userCredObj)=>{
  //     loginUser(userCredObj)
  // }

  // useEffect(()=>{
  //     if(userLoginStatus===true){
  //         navigate("/user-profile")
  //     }
  // },[userLoginStatus])

  return (
    <div className="container">
      <div className="header fs-3 text-center">
        Signin
        {/* {loginErr.length!==0 && <p className='lead text-dange'>{loginErr}</p>} */}
      </div>

      <form className="mt-3 bg-black bg-opacity-75 text-light col-8 mx-auto  p-3 mb-4 rounded">
        <div className="col-8 mx-auto mb-3">
          <label htmlFor="uname" className="mb-2">
            Username
          </label>
          <input
            type="text"
            for="uname"
            className="form-control"
            {...register("username")}
          />
        </div>
        <div className="col-8 mx-auto mb-3">
          <label htmlFor="pwd">Password</label>
          <input
            type="Password"
            for="pwd"
            className="form-control"
            {...register("password")}
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signin;

import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup() {
  let [error, setError] = useState("");
  let [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let addNewUser = (newUser) => {
    //console.log(newUser)

    let fd = new FormData(); //form data object constructor so we used new
    //append new user to formdata
    fd.append("user", JSON.stringify(newUser)); //converting newUser object into string type using json.stringify
    //append selectedvfile
    fd.append("photo", selectedFile);
    axios
      .post("http://localhost:3500/user-api/user-signup", fd)
      .then((response) => {
        //console.log(response)
        if (response.status === 201) {
          //navigate to login page
          navigate("/Signin");
        } else {
          setError(response.data.message);
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  //function to handle file Input
  let onFileSelect = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div className="container">
      <div className="header fs-3 text-center">Signup</div>
      <form
        onSubmit={handleSubmit(addNewUser)}
        className="mt-3 bg-black bg-opacity-75 text-light col-8 mx-auto  p-3 mb-4 rounded"
      >
        {error.length !== 0 && <p className="lead text-danger">{error}</p>}
        <div className="col-8 mx-auto mb-3">
          <label htmlFor="uname" className="mb-2">
            Username
          </label>
          <input
            type="text"
            id="uname"
            className="form-control"
            {...register("username")}
          />
        </div>
        <div className="col-8 mx-auto mb-3">
          <label htmlFor="pwd">Password</label>
          <input
            type="Password"
            id="pwd"
            className="form-control"
            {...register("password")}
          />
        </div>
        <div className="col-8 mx-auto mb-3">
          <label htmlFor="email">email</label>
          <input
            type="text"
            id="email"
            className="form-control"
            {...register("email")}
          />
        </div>
        <div className="col-8 mx-auto mb-3">
          <label htmlFor="dob">DOB</label>
          <input
            type="date"
            id="dob"
            className="form-control"
            {...register("fob")}
          />
        </div>
        <div className="col-8 mx-auto mb-3">
          <label htmlFor="img">select profile pic</label>
          <input
            onInput={onFileSelect}
            type="file"
            id="img"
            className="form-control"
            {...register("image")}
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

export default Signup;

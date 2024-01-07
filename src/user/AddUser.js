import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddUser() {

    let navigate=useNavigate();
  const [user, setUsers] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUsers({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit=async (e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8080/user",user);
    navigate("/")
  }
  const onCancel=()=>{
    navigate("/")
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>
          <form>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Name
            </label>
            <input
              type={"text"}
              placeholder="Enter your name"
              className="form-control"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Username" className="form-label">
              Username
            </label>
            <input
              type={"text"}
              placeholder="Enter your Username"
              className="form-control"
              name="username"
              value={username}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              Email
            </label>
            <input
              type={"text"}
              placeholder="Enter your Email"
              className="form-control"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button type="submit" className="btn btn-dark" onClick={(e)=>onSubmit(e)}>
            Submit
          </button>
          <button type="submit" className="btn btn-danger mx-3" onClick={()=>onCancel()}>
            Cancel
          </button>
          </form>
        </div>
      </div>
    </div>
  );
}

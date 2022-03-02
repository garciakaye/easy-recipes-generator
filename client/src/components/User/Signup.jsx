import React, { useState } from 'react';
import { headers } from "../../Globals";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedIn, userLogInFetch, userFetchSucceeded } from "./userSlice";
import { useNavigate } from "react-router-dom";
import ErrorAlert from "../../errorHandling/ErrorAlert";
import { setErrors } from "../../errorHandling/errorsSlice";


const Signup = () => {
  const errors = useSelector(state => state.errors.entities)
  const dispatch = useDispatch();


  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: ""
  })

  let navigate = useNavigate()

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const strongParams = {
      user: {
        first_name: formData.firstname,
        last_name: formData.lastname,
        username: formData.username,
        password: formData.password
      }
    }

    fetch("/users", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(strongParams)
    })
      .then(res => {
        if (res.ok) {
          res.json()
            .then(data => {
              localStorage.setItem("jwt", data.token)
              dispatch(userLogInFetch(data.user))
              dispatch(userLoggedIn(true));
              dispatch(userFetchSucceeded())
              navigate('/home')
            })
        } else {
          res.json().then(e => dispatch(setErrors(e)))
        }
      })
  }

  return (
    <form
      id="signup"

    >
      <div>
        <label htmlFor="firstname"></label>
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          value={formData.first_name}
          id="firstname"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="lastname"></label>
        <input
          type="text"
          name="lastname"
          placeholder="Last Name"
          value={formData.last_name}
          id="lastname"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="username"></label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          id="username"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="password"></label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          id="password"
          onChange={handleInputChange}
        />
      </div>
      <button
        className="signup-btn"
        id="signUp"
        onClick={e => handleSubmit(e)}
      >
        Create User
      </button>
    </form>
  );
};

export default Signup;
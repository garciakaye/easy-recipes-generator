import React, { useState } from 'react';
import { baseUrl, headers } from "../../Globals";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "./userSlice";
import { userIngredientsGet } from "../Ingredients/userIngredientsSlice";

const Signup = () => {
  const dispatch = useDispatch();

  const initialFormValues = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
  };

  const [values, setValues] = useState(initialFormValues)

  const handleInputChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const strongParams = {
      user: {
        first_name: values.firstname,
        last_name: values.lastname,
        username: values.username,
        password: values.password
      }
    }

    fetch(baseUrl + "/users", {
      method: "POST",
      headers,
      body: JSON.stringify(strongParams)
    })
      .then(resp => resp.json())
      .then(data => {
        userLoggedIn(data.user);
        dispatch(userIngredientsGet(data.user_ingredients))
        localStorage.setItem('jwt', data.token)
      })
  }

  return (
    <div className="signup-form">
      <form
        id="signup"
        onSubmit={handleSubmit}
      >
        <h1>Create An Account</h1>
        <div>
          <label htmlFor="firstname"></label>
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            value={values.firstname}
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
            value={values.lastname}
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
            value={values.username}
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
            value={values.password}
            id="password"
            onChange={handleInputChange}
          />
        </div>
        <button
          className="signup-btn"
          id="signUp"
        >
          Create User
        </button>
      </form>
    </div>
  );
};

export default Signup;

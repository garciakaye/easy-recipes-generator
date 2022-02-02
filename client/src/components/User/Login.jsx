import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logInFetch } from "./userSlice";
import { userIngredientsGet } from "../Ingredients/userIngredientsSlice";


const Login = () => {

  const loggedIn = useSelector(state => state.user.loggedIn)
  const userIngredients = useSelector((state) => state.userIngredients.entities)



  const navigate = useNavigate();
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  useEffect(() => {
    if (loggedIn) {
      navigate("/home")
    }
  }, [loggedIn, navigate])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const strongParams = {
      ...formData
    }
    dispatch(logInFetch(strongParams))
    dispatch(userIngredientsGet(userIngredients))
  }

  // if not logged in, redirect user to the about page

  return (
    <div className="login-form">
      <form
        id="login"
        onSubmit={handleSubmit}
      >
        <h1>{ }</h1>
        <div>
          <label htmlFor="username"></label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button
          className="login-btn"
          id="logIn"
          type="submit"
          value="Login"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;


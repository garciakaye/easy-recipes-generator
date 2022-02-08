import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logInFetch } from "./userSlice";


const Login = () => {
  const loggedIn = useSelector(state => state.user.loggedIn)


  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  useEffect(() => {
    if (loggedIn) {
      console.log("navigating on loggedin")
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
  }


  return (
    <form
      id="login"
      onSubmit={handleSubmit}
    >
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
        type="submit"
        value="Login"
      >
        Login
      </button>
    </form>
  );
};

export default Login;


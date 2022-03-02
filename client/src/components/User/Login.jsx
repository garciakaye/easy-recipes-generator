import React, { useState, useEffect } from 'react';
import '../../styles/forms.css';
import { useNavigate } from 'react-router-dom';
import { baseUrl, headers } from "../../Globals";


const Login = ({ loginUser, loggedIn }) => {

  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })

  useEffect(() => {
    if (loggedIn) {
      navigate("/home")
    }
  }, [loggedIn, navigate])

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault();

    const strongParams = {
      ...formData
    }

    fetch(baseUrl + '/login', {
      method: "POST",
      headers,
      body: JSON.stringify(strongParams)
    })
      .then(resp => resp.json())
      .then(data => {
        //login user
        loginUser(data.user);
        localStorage.setItem('jwt', data.token)
        navigate("/home")
      })
  }

  return (
    <form id="login">
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
        onClick={e => handleSubmit(e)}
      >
        Login
      </button>
    </form>
  );
};

export default Login;

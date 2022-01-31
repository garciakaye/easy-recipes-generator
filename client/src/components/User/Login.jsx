import React, { useState, useEffect } from 'react';
import { baseUrl, headers } from "../../Globals";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logInFetch } from "./userSlice";

const Login = () => {
  const loggedIn = useSelector(state => state.user.loggedIn)
	
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

	useEffect(() => {
		if( loggedIn ) {
			navigate("/")
		}
  }, [loggedIn, navigate])
  
  const handleChange = (e) => {
    e.preventDefault();
    setFormData({...formData, [e.target.name]: e.target.value})
  }

	

  const handleSubmit = (e) => {
    e.preventDefault();

    const strongParams = {
      ...formData
    }
    dispatch(logInFetch(strongParams))
  }

// 	fetch(baseUrl + '/login', {
// 		method: "POST",
// 		headers,
// 		body: JSON.stringify(strongParams)
// 	})
// 		.then(resp => resp.json())
// 		.then(data => {
// 			//login user
// 			loginUser(data.user);
// 			localStorage.setItem('jwt', data.token)
// 		})
// }
  
  return (
    <div className="login-form">
      <form
        id="login"
        onSubmit={handleSubmit}
      >
        <h1>{  }</h1>
        <div>
          <label htmlFor="username"></label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={ handleChange }
            />
        </div>
        <div>
          <label htmlFor="password"></label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={ handleChange }
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


import React, { useState, useEffect } from 'react';
import { baseUrl, headers } from "../../Globals";
import { useNavigate } from 'react-router-dom';

const Login = ({ loginUser, loggedIn, currentUser }) => {
  const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		if( loggedIn ) {
			navigate("/")
		}
	}, [loggedIn, navigate])

	

function handleSubmit(e){
	e.preventDefault();

	const strongParams = {
		username,
		password	
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
		})
}
  
  return (
    <div className="login-form">
      <form
        id="login"
        onSubmit={handleSubmit}
      >
        <h1>{ currentUser.first_name }</h1>
        <div>
          <label htmlFor="username"></label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              id="username"
              onChange={ e => setUsername(e.target.value) }
            />
        </div>
        <div>
          <label htmlFor="password"></label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              id="password"
              onChange={ e => setPassword(e.target.value) }
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


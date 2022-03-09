import React, { useState, useEffect } from 'react';
import '../../styles/forms.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/userSlice";



const Login = () => {

  const isLoggedIn = useSelector(state => state.user.isLoggedIn)

  let navigate = useNavigate()
  const dispatch = useDispatch()


  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/home')
    }
  }, [isLoggedIn, navigate])

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }


  const handleLogInSubmit = e => {
    e.preventDefault();
    dispatch(login(formData))
    navigate('/home')
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
        onClick={e => handleLogInSubmit(e)}
      >
        Login
      </button>
    </form>
  );
};

export default Login;

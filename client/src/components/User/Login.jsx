import React, { useState, useEffect } from 'react';
import '../../styles/forms.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/userSlice";
import Form from 'react-bootstrap/Form';
import ErrorAlert from "../../errorHandling/ErrorAlert";


const Login = () => {
  const errors = useSelector(state => state.errors.entities[0])

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
  }

  return (
    <div>
      <Form className="login-form" onSubmit={handleLogInSubmit}>
        {errors ? <ErrorAlert errors={errors} /> : null}
        <Form.Group>
          <Form.Label htmlFor="username"></Form.Label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="password"></Form.Label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </Form.Group>
        <input className="login-btn" type="submit" value="Login" />
      </Form>
    </div>
  );
};

export default Login;

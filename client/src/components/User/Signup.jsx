import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import ErrorAlert from "../../errorHandling/ErrorAlert";

const Signup = () => {
  const errors = useSelector(state => state.errors.entities[0])


  const isLoggedIn = useSelector(state => state.user.isLoggedIn)


  const navigate = useNavigate()
  const dispatch = useDispatch();


  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: ""
  })


  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const { firstname, lastname, username, password } = formData
    dispatch(signup({
      user: {
        first_name: firstname,
        last_name: lastname,
        username,
        password
      }
    }))
  }

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/home')
    }
  }, [isLoggedIn, navigate])

  return (
    <Form className="signup-form" onSubmit={handleSubmit}>
      {errors ? <ErrorAlert errors={errors} /> : null}
      <Form.Group>
        <Form.Label htmlFor="firstname"></Form.Label>
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          value={formData.firstname}
          id="firstname"
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="lastname"></Form.Label>
        <input
          type="text"
          name="lastname"
          placeholder="Last Name"
          value={formData.lastname}
          id="lastname"
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="username"></Form.Label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          id="username"
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="password"></Form.Label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          id="password"
          onChange={handleInputChange}
        />
      </Form.Group>
      <input
        className="input-submit"
        type="submit"
        value="Create Account"
      />
    </Form>
  );
};

export default Signup;
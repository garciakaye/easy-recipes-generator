import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiMeal } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import Dropdown from 'react-bootstrap/Dropdown';
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";
import { login } from "../../features/userSlice";


const NavBar = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn)
  const username = useSelector(state => state.user.username)

  let navigate = useNavigate()
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })


  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }


  const handleLogInSubmit = e => {
    e.preventDefault();
    dispatch(login(formData))
    navigate('/home')
  }

  const handleLogOut = () => {
    localStorage.removeItem('jwt')
    dispatch(clearUser())
  }

  return (
    <nav id="navbar">
      {isLoggedIn ? (
        <>
          <nav>
            <Link to="/"><GiMeal /></Link>
            <Link className="link" to="/home">Easy Recipes Generator</Link>
            <Link className="link" to="/shopping-list">Shopping List</Link>
          </nav>
          <nav>
            <Dropdown>
              <Dropdown.Toggle id="login-dropdown"><CgProfile />{username}</Dropdown.Toggle>
              <Dropdown.Menu>
                <Link className="link" to="/profile">Profile</Link>
                <Link className="link" to="/" onClick={handleLogOut}>Logout</Link>
              </Dropdown.Menu>
            </Dropdown>
          </nav>
        </>
      ) : (
        <>
          <nav>
            <Link className="link" to="/">Easy Recipes Generator</Link>
          </nav>
          <Dropdown>
            <Dropdown.Toggle id="login-dropdown">Login</Dropdown.Toggle>
            <Dropdown.Menu>
              <label htmlFor="username"></label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
              />
              <label htmlFor="password"></label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              <button
                className="dd-login-btn"
                type="submit"
                value="Login"
                onClick={handleLogInSubmit}
              >
                Login
              </button>
            </Dropdown.Menu>
          </Dropdown>
        </>
      )
      }
    </nav>
  )
};

export default NavBar;


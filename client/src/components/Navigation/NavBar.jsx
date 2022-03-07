import React from 'react';
import { Link } from 'react-router-dom';
import { GiMeal } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import Dropdown from 'react-bootstrap/Dropdown';
import Login from "../User/Login";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../User/userSlice";


const NavBar = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn)
  const username = useSelector(state => state.user.username)

  const dispatch = useDispatch()


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
            <Link className="link" to="/about">About</Link>
            <Link className="link" to="/" onClick={handleLogOut}>Logout</Link>
          </nav>
          <nav>
            <Link to="/profile"><CgProfile />{username}</Link>
          </nav>
        </>
      ) : (
        <>
          <nav>
            <Link className="link" to="/">Easy Recipes Generator</Link>
          </nav>
          <Dropdown>
            <Dropdown.Toggle>Login</Dropdown.Toggle>
            <Dropdown.Menu>
              <Login />
            </Dropdown.Menu>
          </Dropdown>
        </>
      )
      }
    </nav>
  )
};

export default NavBar;


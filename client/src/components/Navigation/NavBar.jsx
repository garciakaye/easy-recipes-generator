import React from 'react';
import { Link } from 'react-router-dom';
import { GiMeal } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Login from "../User/Login";
import { useSelector, useDispatch } from "react-redux";
import { userLogout, userLogoutStatus, userLoggedIn } from "../User/userSlice";


const NavBar = () => {
  const userStatus = useSelector(state => state.user.status)
  const user = useSelector(state => state.user.entities[0])

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(userLogout([]))
    localStorage.removeItem('jwt')
    dispatch(userLogoutStatus())
  }
  console.log(userStatus)
  return (
    <nav id="navbar">
      {userStatus === 'succeeded' ? (
        <>
          <nav>
            <Link to="/"><GiMeal /></Link>
            <Link className="link" to="/home">Easy Recipes Generator</Link>
            <Link className="link" to="/about">About</Link>
            <Link className="link" to="/" onClick={handleLogOut}>Logout</Link>
          </nav>
          <nav>
            <Link to="/profile"><CgProfile /></Link>
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


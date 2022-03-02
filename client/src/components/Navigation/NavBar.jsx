import React from 'react';
import { Link } from 'react-router-dom';
import { GiMeal } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Login from "../User/Login";


const NavBar = ({ loggedIn, loginUser, logoutUser, currentUser }) => {

  const navigate = useNavigate();

  const handleLogOut = () => {
    logoutUser();
    navigate("/")
  }

  return (
    <nav id="navbar">
      {loggedIn ? (
        <>
          <nav>
            <Link to="/"><GiMeal /></Link>
            <Link className="link" to="/home">Easy Recipes Generator</Link>
            <Link className="link" to="/about">About</Link>
            <Link className="link" to="/" onClick={handleLogOut}>Logout</Link>
          </nav>
          <nav>
            <Link to="/profile"><CgProfile />{currentUser.first_name}</Link>
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
              <Login loggedIn={loggedIn} loginUser={loginUser} logoutUser={logoutUser} currentUser={currentUser} />
            </Dropdown.Menu>
          </Dropdown>
        </>
      )
      }
    </nav>
  )
};

export default NavBar;


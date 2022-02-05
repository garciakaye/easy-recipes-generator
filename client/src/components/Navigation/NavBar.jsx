import React from 'react';
import { Link } from 'react-router-dom';
import { GiMeal } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
import FoodLogo from "../LottieFiles/FoodLogo";

const NavBar = ({ logOut, loggedIn, user }) => {

  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut();
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
            <a href="#/" onClick={handleLogOut}>Logout</a>
          </nav>
          <nav>
            <Link to="/profile"><CgProfile />{user.first_name}</Link>
          </nav>
        </>) : (
        <>
          <nav>
            <Link className="link" to="/">Easy Recipes Generator</Link>
          </nav>
          <nav>
            <Link className="link" to="/login">Login</Link>
          </nav>
        </>
      )
      }
    </nav>
  )
};

export default NavBar;

// { loggedIn ? loggedInLinks() : loggedOutLinks() }
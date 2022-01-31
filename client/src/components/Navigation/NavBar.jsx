import React from 'react';
import { Link } from 'react-router-dom';
import { GiMeal } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";

const NavBar = ({ logOut, loggedIn, user }) => {
  
  return (
    <div id="navbar">
      {loggedIn ? (
        <>
        <nav>
          <Link to="/"><GiMeal /></Link>
          <Link to="/">Easy Recipes Generator</Link>
          <a href="#home" onClick={ logOut }>Logout</a>
        </nav>
        <nav>
            <Link to="/profile"><CgProfile />{ user.first_name }</Link>
        </nav>
        </>) : (
        <>
        <nav>
          <Link to="/"><GiMeal /></Link>
          <Link to="/">Easy Recipes Generator</Link>
          <Link to="signup">Signup</Link>
          <Link to="login">Login</Link>
        </nav>
        </>
      )
      }
    </div>
  )
};

export default NavBar;

// { loggedIn ? loggedInLinks() : loggedOutLinks() }
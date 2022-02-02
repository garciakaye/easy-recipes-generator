import React from 'react';
import { Link } from 'react-router-dom';
import { GiMeal } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';


const NavBar = ({ logOut, loggedIn, user }) => {

  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut();
    navigate("/")
  }

  return (
    <div id="navbar">
      {loggedIn ? (
        <>
          <nav>
            <Link to="/"><GiMeal /></Link>
            <Link to="/home">Easy Recipes Generator</Link>
            <Link to="/about">About</Link>
            <a href="#/" onClick={handleLogOut}>Logout</a>
          </nav>
          <nav>
            <Link to="/profile"><CgProfile />{user.first_name}</Link>
          </nav>
        </>) : (
        <>
          <nav>
            <Link to="/"><GiMeal />Easy Recipes Generator</Link>
            {/* <Link to="/about">Easy Recipes Generator</Link> */}
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
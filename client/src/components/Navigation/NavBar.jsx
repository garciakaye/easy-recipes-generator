import React from 'react';
import { Link } from 'react-router-dom';
import { GiMeal } from "react-icons/gi";
// import { CgProfile } "react-icons/cg";



const NavBar = ({ loggedIn, logoutUser, currentUser }) => {

  // const loggedOutLinks = () => {
  //   return (
  //     <nav>
  //       <Link to="/">Homepage</Link>
  //       <Link to="signup">Signup</Link>
  //       <Link to="login">Login</Link>
  //     </nav>
  //   )
  // }

  const handleLogout = (event) => {
    event.preventDefault();
    logoutUser()
  }

  // const loggedInLinks = () => {
  //   return (
  //     <ul>
  //       <li><Link to="/">Homepage</Link></li>
  //       <li><a href="#home" onClick={ handleLogout }>Logout</a></li>
  //     </ul>
  //   )
  // }

  
  return (
    <div id="navbar">
      {loggedIn ? (
        <>
        <nav>
          <Link to="/"><GiMeal /></Link>
          <Link to="/">Recipe Generator</Link>
          <a href="#home" onClick={ handleLogout }>Logout</a>
        </nav>
        <nav>
          <Link to="/profile"></Link>
        </nav>
        </>) : (
        <>
        <nav>
          <Link to="/"><GiMeal /></Link>
          <Link to="/">Recipe Generator</Link>
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
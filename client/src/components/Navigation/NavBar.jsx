import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ loggedIn, logoutUser }) => {

  const loggedOutLinks = () => {
    return (
      <ul>
        <li><Link to="/">Homepage</Link></li>
        <li><Link to="signup">Signup</Link></li>
        <li><Link to="login">Login</Link></li>
      </ul>
    )
  }

  const handleLogout = (event) => {
    event.preventDefault();
    logoutUser()
  }

  const loggedInLinks = () => {
    return (
      <ul>
        <li><Link to="/">Homepage</Link></li>
        <li><a href="#home" onClick={ handleLogout }>Logout</a></li>
      </ul>
    )
  }

  
  return (
    <div>
      { loggedIn ? loggedOutLinks() : loggedInLinks() }
    </div>
  );
};

export default NavBar;

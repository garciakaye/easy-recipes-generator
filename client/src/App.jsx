import './styles/App.css';
import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Signup from './components/Authentication/Signup';
import Login from './components/Authentication/Login';

const App = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const loginUser = user => {
    setCurrentUser(user);
    setLoggedIn(user);
  }

  useEffect(() => {
    const token = localStorage.getItem('jwt')
    if (token && !loggedIn) {
      
      setLoggedIn(true);
    }
  }, [loggedIn])

  return (
    <Router>
      { loggedIn ? <h1>we're loggedin</h1> : null }
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<Signup loginUser={ loginUser }/>} />
        <Route path="login" element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;

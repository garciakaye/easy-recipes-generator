import './styles/App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Signup from './components/Authentication/Signup';
import Login from './components/Authentication/Login';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;

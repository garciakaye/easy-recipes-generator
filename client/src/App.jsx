import './styles/App.css';
import React, { useEffect } from 'react';
import NavBar from './components/Navigation/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import Profile from "./components/User/Profile";
import About from "./components/About/About";
import Forms from "./components/User/Forms";
import { useSelector, useDispatch } from "react-redux";
import { verifyLoggedIn } from "./features/userSlice";
import ShoppingList from "./components/User/ShoppingList";


const App = () => {

  const isLoggedIn = useSelector(state => state.user.isLoggedIn)
  const dispatch = useDispatch()


  useEffect(() => {
    const token = localStorage.getItem('jwt')
    if (token && !isLoggedIn) {
      dispatch(verifyLoggedIn(token))
    }
  }, [isLoggedIn, dispatch])

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path='/home'
          element={<Home />}
        />
        <Route
          path="/"
          element={<About />}
        />
        <Route
          path="/profile"
          element={<Profile />}
        />
        <Route
          path="/shopping-list"
          element={<ShoppingList />}
        />
        <Route
          path="/signup"
          element={<Forms />}
        />
      </Routes>
    </Router>
  );
}

export default App;
import './styles/App.css';
import React, { useEffect } from 'react';
import NavBar from './components/Navigation/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import Profile from "./components/User/Profile";
import About from "./components/About/About";
import Forms from "./components/User/Forms";
// import { baseUrl, headers, getToken } from "./Globals";
import { useSelector, useDispatch } from "react-redux";
import { verifyLoggedIn } from "./components/User/userSlice";
import { userLoggedIn } from "./components/User/userSlice";

const App = () => {
  // const [currentUser, setCurrentUser] = useState({});
  // const [loggedIn, setLoggedIn] = useState(false);

  // function loginUser(user) {
  //   setCurrentUser(user);
  //   setLoggedIn(user);
  // }

  // function logoutUser() {
  //   setCurrentUser({});
  //   setLoggedIn(false);
  //   localStorage.removeItem('jwt');
  // }

  // useEffect(() => {
  //   const token = localStorage.getItem('jwt')
  //   if (token && !loggedIn) {
  //     // fetch to rails backend
  //     fetch(baseUrl + '/get-current-user', {
  //       method: "GET",
  //       headers: {
  //         ...headers,
  //         ...getToken()
  //       }
  //     })
  //       .then(resp => resp.json())
  //       .then(user => loginUser(user))
  //     // setLoggedIn(true);
  //   }
  // }, [loggedIn])

  const userStatus = useSelector(state => state.user.status)
  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem('jwt')
    if (token && userStatus === 'idle') {
      dispatch(verifyLoggedIn(token))
    }
  }, [userStatus, dispatch])

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
        {/* <Route
          path="/login"
          element={<Login
          />
          }
        /> */}
        <Route
          path="/signup"
          element={<Forms />}
        />
      </Routes>
    </Router>
  );
}

export default App;
import React from 'react';
import '../../styles/forms.css';
import Signup from "./Signup";
import Login from "./Login";
import FoodLogo from "../LottieFiles/FoodLogo";

const Forms = ({ loggedIn, user }) => {
  return (
    <div className="forms">
      <div className="login-signup">
        <Login loggedIn={loggedIn} user={user} />
        <Signup />
      </div>
    </div>
  );
};

export default Forms;

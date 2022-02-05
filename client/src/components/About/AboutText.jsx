import React from 'react';
// import Signup from "../User/Signup";
// import Login from "../User/Login";
import { Link } from "react-router-dom";

const AboutText = () => {
  return (
    <div className="about-words">
      The <span>Easy Recipes Generator</span> finds recipes with ingredients you already have!
      <Link to="/login">
        <button type="button"> Try It Now!</button>
      </Link>

    </div>);
};

export default AboutText;

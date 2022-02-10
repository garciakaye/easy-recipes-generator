import React from 'react';
import { Link } from "react-router-dom";

const AboutText = () => {
  return (
    <div className="about-words">
      The <span>Easy Recipes Generator</span> finds recipes with ingredients you already have!
      <Link to="/signup">
        <button type="button"> Try It Now!</button>
      </Link>

    </div>);
};

export default AboutText;

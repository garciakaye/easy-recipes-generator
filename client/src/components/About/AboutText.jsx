import React from 'react';
import { Link } from "react-router-dom";

const AboutText = () => {
  return (
    <div className="about-words">
      The <span>Easy Recipes Generator</span> finds recipes with ingredients you already have and shows you missing ingredients that you can add to a shopping list!
      <Link to="/signup">
        <button className="try-now-btn" type="button"> Try It Now!</button>
      </Link>
    </div>
  );
};

export default AboutText;

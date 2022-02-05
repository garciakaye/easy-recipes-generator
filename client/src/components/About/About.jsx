import React from 'react';
import '../../styles/about.css';
import LottieGirl from "../LottieFiles/LottieGirl";
import AboutText from "./AboutText";


const About = () => {

  return (
    <div className="about-container">
      <div className="about">
        <div className="lottie-girl" >
          <LottieGirl />
        </div>
        <div className="about-text" >
          <AboutText />
        </div>
      </div>
    </div>

  );
};

export default About;

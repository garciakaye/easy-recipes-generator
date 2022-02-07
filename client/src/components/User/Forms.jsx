import React, { useState } from 'react';
import '../../styles/forms.css';
import Signup from "./Signup";
import Login from "./Login";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import FoodCarousel from "../LottieFiles/FoodCarousel";

const Forms = () => {
  const [loginForm, setLoginForm] = useState(false)

  const handleFormToggle = () => setLoginForm(!loginForm)

  return (
    <Container className="login-signup-container">
      {loginForm ? (
        <Card className="login-signup-card" style={{ height: '425px', width: '500px' }}>
          <Card.Body>
            <Card.Title>
              <FoodCarousel />
            </Card.Title>
            <Login />
            <a href="#/" onClick={handleFormToggle}>Not yet a member?</a>
          </Card.Body>
        </Card>
      ) : (
        <Card className="login-signup-card" style={{ height: '425px', width: '500px' }}>
          <Card.Body>
            <Card.Title>
              <FoodCarousel />
            </Card.Title>
            <Signup />
            <a href="#/" onClick={handleFormToggle}>Already have an account?</a>
          </Card.Body>
        </Card>
      )
      }
    </Container>
  );
};

export default Forms;

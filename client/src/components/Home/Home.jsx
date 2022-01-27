import React from 'react';
// import '../styles/home.css';
import { Container, Row, Col } from "react-bootstrap";
import IngredientsContainer from "../Ingredients/IngredientsContainer";

const Home = () => {
  return (
    <Container className="home-container" >
      <Row>
        Homepage
      </Row>
      <Row>
        <Col className="border rounded" xs={6}>
          Recipes
        </Col>
        <Col className="border rounded" >
          My Pantry
          <IngredientsContainer />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

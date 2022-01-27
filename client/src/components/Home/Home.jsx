import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <Row>
        Homepage
      </Row>
      <Row>
        <Col className="border">
          Recipes
        </Col>
        <Col className="border" lg="3">
          My Pantry
          {/* <Ingredients /> */}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

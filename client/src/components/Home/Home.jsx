import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <Row>
        Homepage
      </Row>
      <Row>
        <Col className="border" lg="3">
          Pantry
        </Col>
        <Col className="border">
          Recipes
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

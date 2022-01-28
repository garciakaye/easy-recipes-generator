import React, { useState, useEffect } from 'react';
import '../../styles/home.css';
import { baseUrl } from "../../Globals";
import { Container, Row, Col } from "react-bootstrap";
import IngredientsContainer from "../Ingredients/IngredientsContainer";

const Home = () => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetch(baseUrl + '/ingredients')
    .then((r) => r.json())
    .then((ingredient) => setIngredients(ingredient))
  }, [])



  return (
    <div className="home-container"  >
        Homepage
      <Row>
        <Col className="border" xs={9}>
          Recipes
        </Col>
        <Col className="border" xs={3}>
          My Pantry
          <IngredientsContainer ingredients={ ingredients } />
        </Col>
      </Row>
    </div>
  );
};

export default Home;

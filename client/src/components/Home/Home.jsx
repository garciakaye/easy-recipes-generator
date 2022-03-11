import React from 'react';
import '../../styles/home.css';
import { Row, Col } from "react-bootstrap";
import IngredientsContainer from "../Ingredients/IngredientsContainer";
import RecipesContainer from "../Recipes/RecipesContainer";


const Home = () => {


  return (
    <div className="home-container" >
      <Row>
        <Col className="home-col" xs={9}>
          <RecipesContainer />
        </Col>
        <Col className="home-col" xs={3}>
          <div className="my-pantry">My Pantry</div>
          <IngredientsContainer />
        </Col>
      </Row>
    </div>
  );
};

export default Home;

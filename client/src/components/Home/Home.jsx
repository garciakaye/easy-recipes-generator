import React from 'react';
import '../../styles/home.css';
// import { baseUrl } from "../../Globals";
import { Row, Col } from "react-bootstrap";
import IngredientsContainer from "../Ingredients/IngredientsContainer";
import RecipesContainer from "../Recipes/RecipesContainer";
import RecipesCard from "../Recipes/RecipesCard";

const Home = () => {

  return (
    <div className="home-container"  >
      Homepage
      <Row>
        <Col className="border" xs={9}>
          Recipes
          <RecipesContainer />
        </Col>
        <Col className="border" xs={3}>
          My Pantry
          {/* <IngredientsContainer ingredients={ingredients} /> */}
          <IngredientsContainer />
        </Col>
      </Row>
    </div>
  );
};

export default Home;

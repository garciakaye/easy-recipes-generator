import React, { useEffect, useState } from 'react';
import '../../styles/home.css';
import { Row, Col } from "react-bootstrap";
// import IngredientsContainer from "../Ingredients/IngredientsContainer";
// import RecipesContainer from "../Recipes/RecipesContainer";
import { useNavigate } from 'react-router-dom';
import IngredientsContainer from "../Ingredients/IngredientsContainer";



const Home = ({ loggedIn }) => {
  const [allIngredients, setAllIngredients] = useState([])

  useEffect(() => {
    fetch('/ingredients')
      .then((r) => r.json())
      .then((ingredient) => setAllIngredients(ingredient))
  }, [])

  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn) {
      navigate("/signup")
    }
  }, [loggedIn, navigate])


  return (
    <div className="home-container" >
      Homepage
      <Row>
        <Col className="border" xs={9}>
          Recipes
        </Col>
        <Col className="border" xs={3}>
          My Pantry
          <IngredientsContainer allIngredients={allIngredients} />
        </Col>
      </Row>
    </div>
  );
};

export default Home;

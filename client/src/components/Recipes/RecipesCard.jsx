import React from 'react';
import Card from 'react-bootstrap/Card';
import { apiUrlRecipeInformation } from "../../Globals";
import { recipesGet } from "./recipesSlice";
import { useDispatch } from "react-redux";

const RecipesCard = ({ recipe }) => {
  const dispatch = useDispatch();

  const missedIngredientsArray = recipe.missedIngredients.map(ingredient => ingredient.name)

  const handleClick = () => {
    fetch(apiUrlRecipeInformation + recipe.id, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_API_KEY
      }
    })
      .then(response => response.json())
      .then(res => console.log(res))
    dispatch(recipesGet())
      .catch(err => {
        console.error(err);
      });
  }



  return (
    <Card className="recipes-card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={recipe.image} />
      <Card.Body>
        <Card.Title>{recipe.title}</Card.Title>
        <Card.Text>
          {missedIngredientsArray}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card >
  );
};

export default RecipesCard;

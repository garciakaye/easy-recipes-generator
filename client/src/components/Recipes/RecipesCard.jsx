import React from 'react';
import Card from 'react-bootstrap/Card';
import { useSelector } from "react-redux";

const RecipesCard = ({ recipe }) => {

  const handleClick = () => {
    fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk?ids=${recipe.id}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_API_KEY
      }
    })
      .then(response => response.json())
      .then(res => console.log(res))
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
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card >
  );
};

export default RecipesCard;

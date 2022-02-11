import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { apiUrlRecipeInformation } from "../../Globals";
import { recipesGet } from "./recipesSlice";
import { useDispatch, useSelector } from "react-redux";

const RecipesCard = ({ recipe }) => {






  return (
    <Card className="recipes-card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={recipe.image} />
      <Card.Body>
        <Card.Title>{recipe.title}</Card.Title>
        <Card.Text>

          {recipe.sourceUrl}

        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card >
  );
};

export default RecipesCard;

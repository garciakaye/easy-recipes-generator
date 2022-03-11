import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { CgExternal } from "react-icons/cg";
import { shoppingListAdd } from "../../features/userSlice";
import { useDispatch } from "react-redux";

const RecipesCard = ({ recipe }) => {

  const dispatch = useDispatch();


  const addToShoppingList = (ingredientName) => {
    dispatch(shoppingListAdd(ingredientName))
  }

  return (
    <Card className="card-border" style={{ width: '23em' }} >
      <Card.Header className="recipe-headers">
        {recipe.title}
        <a className="redirect-to-recipe" target="_blank" rel="noreferrer" href={recipe.sourceUrl}><CgExternal /></a>
      </Card.Header>
      <Card.Img variant="top" src={recipe.image} />
      <Card.Body>
        {recipe.missedIngredients.map((ingredient, index) => {
          return <Card.Text className="missed-ingredients" key={index} onClick={() => addToShoppingList(ingredient.name)}>
            {ingredient.name}
          </Card.Text>
        })}
      </Card.Body>
    </Card >
  );
};

export default RecipesCard;


import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { baseUrl, headers } from "../../Globals";
import Ingredient from "./Ingredient";

const IngredientsCategoryCard = ({ name, ingredients }) => {
  const [showMore, setShowMore] = useState(false);
  
  
  const renderIngredients = ingredients.map((ingredient, index) => <Ingredient key={ index } ingredient={ ingredient } />)

  const someIngred = renderIngredients.splice(11)
  
  
  return (
    <Card border="light">
      <Card.Header>{ name }</Card.Header>
      <Card.Body>
        <Card.Text className="ingred-span">
          {showMore ? someIngred : renderIngredients}
          <button onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show less" : "Show more"}
          </button>
        </Card.Text>
      </Card.Body>
  </Card>
  );
};

export default IngredientsCategoryCard;

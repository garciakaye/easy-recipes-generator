import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'

const IngredientsCategoryCard = ({ name, ingredients }) => {
  const [showMore, setShowMore] = useState(false);
  
const renderIngredients = ingredients.map((ingredient, index) => {
  return <a href="#" className="ingredients-btns" key={ index }>
      {ingredient.name}
  </a>
})

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

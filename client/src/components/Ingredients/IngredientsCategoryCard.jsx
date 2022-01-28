import React from 'react';
import Card from 'react-bootstrap/Card'

const IngredientsCategoryCard = ({ name, ingredients}) => {
  
  // const renderIngredients = ingredients.map((ingredient) => {
  //   return (
  //     <span key={ingredient.id}>
  //       <a href="#">
  //         {ingredient.name}
  //       </a>
  //     </span>
  //   )
  // })

  return (
    <Card border="light">
      <Card.Header>{ name }</Card.Header>
      <Card.Body>
        <Card.Text className="ingred-span">
        {ingredients.map((ingredient, index) => {
          return <button className="ingredients-btns" key={ index }>
              {ingredient.name}
          </button>
        })}
          </Card.Text>
      </Card.Body>
  </Card>
  );
};

export default IngredientsCategoryCard;

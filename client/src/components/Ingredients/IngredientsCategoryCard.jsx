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
        {ingredients.map((ingredient, index) => {
          return <span className="ingredients-btns" key={ index }>
            <button>
              {ingredient.name}
              </button>
          </span>
        })}
      </Card.Body>
  </Card>
  );
};

export default IngredientsCategoryCard;

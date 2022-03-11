import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Ingredient from "./Ingredient";
import { AiOutlineArrowDown } from "react-icons/ai"
import { AiOutlineArrowUp } from "react-icons/ai"

const IngredientsCategoryCard = ({ name, ingredients }) => {

  const [showMore, setShowMore] = useState(false);

  const renderIngredients = ingredients.map((ingredient) => <Ingredient key={ingredient.id} ingredient={ingredient} />)

  const someIngred = renderIngredients.splice(11)


  return (
    <Card className="card-border">
      <Card.Header className="headers">{name}</Card.Header>
      <Card.Body>
        <Card.Title>
          <div className="show-btn" onClick={() => setShowMore(!showMore)}>
            {showMore ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
          </div>
        </Card.Title>
        <Card.Text className="ingred-span">
          {showMore ? someIngred : renderIngredients}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default IngredientsCategoryCard;

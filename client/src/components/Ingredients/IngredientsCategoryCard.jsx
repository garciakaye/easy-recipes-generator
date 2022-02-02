import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Ingredient from "./Ingredient";
import { useSelector, useDispatch } from "react-redux";

const IngredientsCategoryCard = ({ name, ingredients }) => {
  const [showMore, setShowMore] = useState(false);
  const user = useSelector((state) => state.user.entities[0])
  const dispatch = useDispatch();

  const renderIngredients = ingredients.map((ingredient, index) => <Ingredient key={index} ingredient={ingredient} />)

  const someIngred = renderIngredients.splice(11)


  return (
    <Card border="light">
      <Card.Header>{name}</Card.Header>
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

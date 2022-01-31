import React from 'react';
import { useSelector } from "react-redux";

const Ingredient = ({ingredient}) => {
  const userIngredients = useSelector((state) => state.userIngredients.entities)
  
  return (
  <a href="#" className="ingredients-btns" >
    {ingredient.name}
  </a>
    
  );
};

export default Ingredient;

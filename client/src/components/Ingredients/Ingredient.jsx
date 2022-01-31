import React, { useState } from 'react';
// import { useSelector } from "react-redux";

const Ingredient = ({ingredient}) => {
  // const userIngredients = useSelector((state) => state.userIngredients.entities)
  const [userIngredients, setUserIngredients] = useState(false);
  
  const handleAddUserIngredients = () => {
    // fetch to user_ingredient POST

  }
  
  return (
  <a href="#" className="ingredients-btns" > 
    {ingredient.name}
  </a>
    
  );
};

export default Ingredient;

import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { userIngredientAdd, userIngredientsPost } from "./userIngredientsSlice";

const Ingredient = ({ ingredient }) => {
  const user = useSelector((state) => state.user.entities[0])
  const dispatch = useDispatch();


  const handleAddUserIngredients = () => {
    const userIngredient = {
      user_id: user.id,
      ingredient_id: ingredient.id
    }
    dispatch(userIngredientsPost(userIngredient))
  }
  
  return (
  <a href="#" className="ingredients-btns" onClick={ handleAddUserIngredients} > 
    {ingredient.name}
  </a>
    
  );
};

export default Ingredient;

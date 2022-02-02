import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { userIngredientsPost, userIngredientsDelete } from "./userIngredientsSlice";

const Ingredient = ({ ingredient }) => {
  const user = useSelector((state) => state.user.entities[0])
  const userIngredients = useSelector((state) => state.userIngredients.entities)
  // console.log(userIngredients)

  const dispatch = useDispatch();
  // debugger
  const findUserIngredient = userIngredients.find(({ ingredient_id }) => ingredient_id === ingredient.id)


  const handleUserIngredientAdd = () => {
    const userIngredient = {
      user_id: user.id,
      ingredient_id: ingredient.id
    }
    dispatch(userIngredientsPost(userIngredient))
  }

  const handleUserIngredientRemove = () => {
    dispatch(userIngredientsDelete(findUserIngredient.id))
  }


  // const renderButton = findUserIngredient ?
  //   <a href="#/" className="ingredients-btns-active" onClick={handleUserIngredientRemove}>
  //     {ingredient.name} </a>
  //   :
  //   <a href="#/" className="ingredients-btns" onClick={handleUserIngredientAdd} >
  //     {ingredient.name}
  //   </a>

  return (

    <a href="#/" className="ingredients-btns-active" onClick={handleUserIngredientRemove}>
      {ingredient.name} </a>

  );
};

export default Ingredient;

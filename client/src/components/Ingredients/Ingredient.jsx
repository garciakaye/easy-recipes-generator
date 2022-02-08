import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { userIngredientsPost, userIngredientsDelete } from "./userIngredientsSlice";

const Ingredient = ({ ingredient }) => {
  const user = useSelector((state) => state.user.entities[0])
  const userIngredients = useSelector((state) => state.userIngredients.entities)
  const dispatch = useDispatch();

  console.log(user)

  const handleUserIngredientAdd = () => {
    const userIngredient = {
      user_id: user.id,
      ingredient_id: ingredient.id
    }
    console.log(userIngredient)
    dispatch(userIngredientsPost(userIngredient))
  }

  const findUserIngredient = userIngredients.find(({ ingredient_id }) => ingredient_id === ingredient.id)

  const handleUserIngredientRemove = () => {
    dispatch(userIngredientsDelete(findUserIngredient.id))
  }


  return (
    <>
      {findUserIngredient ?
        <a href="#/" className="ingredients-btns-active" onClick={handleUserIngredientRemove}>{ingredient.name} </a>
        :
        <a href="#/" className="ingredients-btns" onClick={handleUserIngredientAdd}>{ingredient.name} </a>
      }
    </>
  );
};

export default Ingredient;



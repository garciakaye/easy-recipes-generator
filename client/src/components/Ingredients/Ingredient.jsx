import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { userIngredientRemove, userIngredientAdd } from "./userIngredientsSlice";
import { baseUrl, headers } from "../../Globals";

const Ingredient = ({ ingredient }) => {
  const user = useSelector((state) => state.user.entities[0])
  const userIngredients = useSelector((state) => state.userIngredients.entities)

  const dispatch = useDispatch();


  const handleUserIngredientAdd = () => {
    const userIngredient = {
      user_id: user.id,
      ingredient_id: ingredient.id
    }
    fetch(baseUrl + "/user_ingredients", {
      method: "POST",
      headers,
      body: JSON.stringify(userIngredient)
    })
      .then(res => res.json())
      .then(data => {
        setFindUserIngredient(data)
        dispatch(userIngredientAdd(data))
      })
  }

  const [findUserIngredient, setFindUserIngredient] = useState(userIngredients.find(({ ingredient_id }) => ingredient_id === ingredient.id))

  const handleUserIngredientRemove = () => {

    fetch(baseUrl + `/user_ingredients/${findUserIngredient.id}`, {
      method: "DELETE",
    })
      .then(dispatch(userIngredientRemove(findUserIngredient.id)))

    setFindUserIngredient(null)
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



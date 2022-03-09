import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
// import { getUserIngredients } from "../../features/userSlice";
import { baseUrl, headers } from "../../Globals";
import { ingredientAdd, ingredientRemove } from "../../features/userSlice";

const Ingredient = ({ ingredient }) => {
  const myIngredients = useSelector((state) => state.user.ingredients);
  const user = useSelector((state) => state.user)
  // console.log(myIngredients)


  // const [findUserIngredient, setFindUserIngredient] = useState(myIngredients.find(({ ingredient_id }) => ingredient_id === ingredient.id))

  const dispatch = useDispatch()


  const handleUserIngredientAdd = async () => {

    const userIngredient = {
      user_id: user.id,
      ingredient_id: ingredient.id
    }

    const res = await fetch(baseUrl + "/user_ingredients", {
      method: "POST",
      headers,
      body: JSON.stringify(userIngredient)
    })
    const data = await res.json();
    console.log(data)
    // dispatch(ingredientAdd(data));
  }

  const isIngredientInList = myIngredients.find(myIngredient => myIngredient.id === ingredient.id);


  const handleUserIngredientRemove = async () => {
    await fetch(baseUrl + `/users/${user.id}/ingredients/${isIngredientInList.id}`, {
      method: "DELETE",
    });

    // dispatch(ingredientRemove(myIngredients.id));
  }

  return (
    <>
      {/* <a href="#" className="ingredients-btns" >
        {ingredient.name}
      </a> */}
      {isIngredientInList ?
        <a href="#/" className="ingredients-btns-active" onClick={handleUserIngredientRemove}>{ingredient.name} </a>
        :
        <a href="#/" className="ingredients-btns" onClick={handleUserIngredientAdd}>{ingredient.name} </a>
      }
    </>
  );
};

export default Ingredient;



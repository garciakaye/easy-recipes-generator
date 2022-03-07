import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getUserIngredients } from "../User/userSlice";
import { baseUrl, headers } from "../../Globals";

const Ingredient = ({ ingredient }) => {

  // const ingredientIds = useSelector((state) => state.user.ingredientIds)

  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getUserIngredients())
  // }, [dispatch])





  // const dispatch = useDispatch();

  // const handleUserIngredientAdd = () => {
  //   const userIngredient = {
  //     user_id: user.id,
  //     ingredient_id: ingredient.id
  //   }
  //   fetch(baseUrl + "/user_ingredients", {
  //     method: "POST",
  //     headers,
  //     body: JSON.stringify(userIngredient)
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       setFindUserIngredient(data)
  //       dispatch(userIngredientAdd(data))
  //     })
  // }

  // const [findUserIngredient, setFindUserIngredient] = useState(userIngredients.find(({ ingredient_id }) => ingredient_id === ingredient.id))

  // const handleUserIngredientRemove = () => {

  //   fetch(baseUrl + `/user_ingredients/${findUserIngredient.id}`, {
  //     method: "DELETE",
  //   })
  //     .then(dispatch(userIngredientRemove(findUserIngredient.id)))

  //   setFindUserIngredient(null)
  // }


  return (
    <>
      <a href="#" className="ingredients-btns" >
        {ingredient.name}
      </a>
      {/* {findUserIngredient ?
        <a href="#/" className="ingredients-btns-active" onClick={handleUserIngredientRemove}>{ingredient.name} </a>
        :
        <a href="#/" className="ingredients-btns" onClick={handleUserIngredientAdd}>{ingredient.name} </a>
      } */}
    </>
  );
};

export default Ingredient;



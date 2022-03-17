import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { baseUrl, headers } from "../../Globals";
import { ingredientAdd, ingredientRemove } from "../../features/userSlice";


const Ingredient = ({ ingredient }) => {
  const myIngredients = useSelector((state) => state.user.ingredients);
  const user = useSelector((state) => state.user)

  const initLoaded = useRef(false);

  const [findUserIngredient, setFindUserIngredient] = useState(myIngredients.find(myIngredient => {
    return myIngredient.id === ingredient.id;
  }));

  useEffect(() => {
    if (user.id !== -1 && !initLoaded.current) {
      const userIngredient = myIngredients.find(myIngredient => {
        return myIngredient.id === ingredient.id;
      })
      setFindUserIngredient(userIngredient);
      initLoaded.current = true;
    }
  }, [user, ingredient.id, myIngredients]);

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
    setFindUserIngredient(data.ingredient)
    dispatch(ingredientAdd(data.ingredient));
  }




  const handleUserIngredientRemove = async () => {
    await fetch(baseUrl + `/users/${user.id}/ingredients/${findUserIngredient.id}`, {
      method: "DELETE",
    });
    setFindUserIngredient(null);
    dispatch(ingredientRemove(findUserIngredient.id));

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



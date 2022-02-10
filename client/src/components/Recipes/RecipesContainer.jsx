import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import RecipesCard from "./RecipesCard";
import { recipesGet } from "./recipesSlice";
import { apiUrlFindByIngredients } from "../../Globals";


const RecipesContainer = () => {
  const userIngredientsNames = useSelector((state) => state.userIngredients.ingredients)

  const dispatch = useDispatch();

  const [recipes, setRecipes] = useState([])

  const userIngredientNamesArray = userIngredientsNames.map(ingredient => ingredient.name)


  useEffect(() => {
    fetch(apiUrlFindByIngredients + `${userIngredientNamesArray}&number=6&ignorePantry=true&ranking=2`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_API_KEY
      }
    })
      .then(response => response.json())
      .then(recipes => setRecipes(recipes))
    dispatch(recipesGet(recipes))

  }, [userIngredientNamesArray, dispatch, recipes])

  const recipeIds = () => {
    return recipes.map(recipe => {
      return <RecipesCard key={recipe.id} recipe={recipe}></RecipesCard>
    })
  }



  return (
    <div>
      {recipeIds()}
    </div>
  );
};

export default RecipesContainer;

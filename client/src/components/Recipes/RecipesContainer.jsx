import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import RecipesCard from "./RecipesCard";
import { apiUrlFindByIngredients } from "../../Globals";


const RecipesContainer = () => {
  const userIngredientsNames = useSelector((state) => state.userIngredients.ingredients)

  const [recipeList, setRecipeList] = useState({})


  useEffect(() => {
    const userIngredientNamesArray = userIngredientsNames.map(ingredient => ingredient.name)
    const getRecipes = async () => {
      const response = await fetch(apiUrlFindByIngredients + userIngredientNamesArray, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_API_KEY
        }
      })
      let recipeData = await response.json()
      setRecipeList(recipeData)
    }
    getRecipes()
  }, [userIngredientsNames])



  const renderRecipeCards = () => {
    return recipeList.results.map(recipe => {
      return <RecipesCard key={recipe.id} recipe={recipe}></RecipesCard>
    })
  }


  return (
    <div className="recipes-container">
      {recipeList.results ? renderRecipeCards() : null}
    </div>
  );
};

export default RecipesContainer;

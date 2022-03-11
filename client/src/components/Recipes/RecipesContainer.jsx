import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import RecipesCard from "./RecipesCard";
import { apiUrlFindByIngredients } from "../../Globals";



const RecipesContainer = () => {
  const myIngredients = useSelector((state) => state.user.ingredients);

  const [recipeList, setRecipeList] = useState({})


  useEffect(() => {
    if (myIngredients.length > 0) {
      const userIngredientNamesArray = myIngredients.map(ingredient => ingredient.name)
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
    }
  }, [myIngredients])



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

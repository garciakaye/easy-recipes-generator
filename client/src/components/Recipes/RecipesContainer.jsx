import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import RecipesCard from "./RecipesCard";
import { recipesGet } from "./recipesSlice";
import { apiUrlFindByIngredients, apiUrlRecipeInformation } from "../../Globals";


const RecipesContainer = () => {
  const userIngredientsNames = useSelector((state) => state.userIngredients.ingredients)

  const [recipes, setRecipes] = useState([])
  const [fetchingRecipes, setFetchingRecipes] = useState(true)

  const userIngredientNamesArray = userIngredientsNames.map(ingredient => ingredient.name)


  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(apiUrlFindByIngredients + `${userIngredientNamesArray}&number=6&ignorePantry=true&ranking=2`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_API_KEY
        }
      })
      let recipesArray = await response.json()

      // .then(response => response.json())
      // .then(recipes => setRecipes(recipes))
      // dispatch(recipesGet(recipes))
      console.log("starting for loop", recipesArray)
      for (let index = 0; index < recipesArray.length; index++) {
        const recipe = recipesArray[index];
        const response = await fetch(apiUrlRecipeInformation + recipe.id, {
          "method": "GET",
          "headers": {
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_API_KEY
          }
        })
        const res = await response.json()

        recipesArray[index] = {
          ...recipe,
          sourceUrl: res[0].sourceUrl
        }
        console.log(res)
      }


      if (recipesArray.length > 0) {
        setRecipes(recipesArray)
        setFetchingRecipes(false)
      }

      console.log("setting FetchingRecipes to false")
    }
    if (fetchingRecipes) {
      console.log(fetchingRecipes)
      getRecipes()
    }

  }, [userIngredientNamesArray, fetchingRecipes])

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

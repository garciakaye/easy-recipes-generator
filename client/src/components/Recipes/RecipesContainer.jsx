import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import RecipesCard from "./RecipesCard";
import { recipesGet } from "./recipesSlice";


const RecipesContainer = () => {
  const userIngredientsNames = useSelector((state) => state.userIngredients.ingredients)

  const dispatch = useDispatch();

  const [recipes, setRecipes] = useState([])

  const userIngredientNamesArray = userIngredientsNames.map(ingredient => ingredient.name)


  useEffect(() => {
    fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=${userIngredientNamesArray}&number=10&ignorePantry=true&ranking=1`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_API_KEY
      }
    })
      .then(response => response.json())
      .then(recipes => setRecipes(recipes))
    dispatch(recipesGet)

  }, [userIngredientNamesArray, dispatch])

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

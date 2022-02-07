import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { apiHeaders } from "../../Globals";

const RecipesContainer = () => {
  const user = useSelector((state) => state.user.entities[0])
  const userIngredients = useSelector((state) => state.userIngredients.entities)
  // console.log(user.ingredients)

  // const userIngredientsNames = user.ingredients.map(name => console.log(name))
  // console.log(userIngredientsNames)

  const [recipes, setRecipes] = useState([]);


  useEffect(() => {
    fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=onions%2C%20celery%2C%20carrots&number=5&ignorePantry=true&ranking=1", {
      "method": "GET",
      "headers": apiHeaders
    })
      .then(response => response.json())
      .then(recipes => console.log(recipes))

  }, [])



  return (
    <div>

    </div>
  );
};

export default RecipesContainer;

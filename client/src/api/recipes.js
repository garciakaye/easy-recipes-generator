const SPOONACULAR_HEADERS = new Headers({
  "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  "x-rapidapi-key": process.env.REACT_APP_API_KEY
})


export const getRecipesByIngredients = async (ingredients) => {
  const response = await fetch(ingredients, {
    method: 'GET',
    headers: SPOONACULAR_HEADERS,
  })
  const data = await response.json()
  return data
}



// useEffect(() => {
//   if (userIngredientsNames.length > 0) {
//     const userIngredientNamesArray = userIngredientsNames.map(ingredient => ingredient.name)
//     const getRecipes = async () => {
//       const response = await fetch(apiUrlFindByIngredients + userIngredientNamesArray, {
//         "method": "GET",
//         "headers": {
//           "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
//           "x-rapidapi-key": process.env.REACT_APP_API_KEY
//         }
//       })
//       let recipeData = await response.json()
//       dispatch(recipesGet(recipeData))
//       setRecipeList(recipeData)
//     }
//     getRecipes()
//   }
// }, [userIngredientsNames, dispatch])
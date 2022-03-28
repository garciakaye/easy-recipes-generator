// export const baseUrl = "http://localhost:3000";
export const baseUrl = "https://easy-recipes-generator.herokuapp.com/";
export const headers = {
  "Accept": "application/json",
  "Content-Type": "application/json"
}

export const getToken = () => {
  return {
    'Authorization': `bearer ${localStorage.getItem('jwt')}`
  }
}

export const apiUrlFindByIngredients = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/searchComplex?limitLicense=true&offset=20&number=50&ranking=1&addRecipeInformation=true&fillIngredients=true&includeIngredients='


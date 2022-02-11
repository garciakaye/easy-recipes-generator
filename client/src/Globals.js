export const baseUrl = "http://localhost:3000";
export const headers = {
  "Accept": "application/json",
  "Content-Type": "application/json"
}

export const getToken = () => {
  return {
    'Authorization': `bearer ${localStorage.getItem('jwt')}`
  }
}

export const apiUrlFindByIngredients = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/searchComplex?limitLicense=true&offset=0&number=20&addRecipeInformation=true&fillIngredients=true&includeIngredients='
export const apiUrlRecipeInformation = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk?ids='
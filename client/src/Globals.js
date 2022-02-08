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

<<<<<<< HEAD
=======
export const apiUrl = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=onion%2Ccelery%2Ccarrots&number=5&ignorePantry=true&ranking=1"
export const apiHeaders = {

  "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  "x-rapidapi-key": "f6b3957100msh997ff790bf6be7bp164369jsn3534030ce568"
}
>>>>>>> parent of b39c689 (Remove exposed API key)

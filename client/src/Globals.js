export const baseUrl = "http://localhost:3000";
export const headers = {
  "Accept": "application/json",
  "Content-Type": "application/json"
}

export const getToken = () => {
  return {
    'Authorization': `bearer ${ localStorage.getItem('jwt') }`
  }
<<<<<<< HEAD
}

export const apiUrl = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=onion%2Ccelery%2Ccarrots&number=5&ignorePantry=true&ranking=1"
=======
}
>>>>>>> parent of 83d9426 (Clean code and remove empty spaces)

import { getRecipesByIngredients } from "./recipes";
import { getUserIngredients } from "./userIngredients";
import { getAllIngredients } from "./allIngredients";

const api = {
  recipes: {
    getRecipesByIngredients
  },
  userIngredients: {
    getUserIngredients
  },
  allIngredients: {
    getAllIngredients
  }
}

export default api
import { headers } from "../Globals";

export const getUserIngredients = async (userId) => {
  const response = await fetch(`/users/${userId}/user_ingredients`, {
    method: 'GET',
    headers,
  })
  const data = await response.json()
  return data
}
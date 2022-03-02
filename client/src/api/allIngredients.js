import { baseUrl, headers } from "../Globals";

export const getAllIngredients = async () => {
  const response = await fetch(baseUrl + '/ingredients', {
    method: 'GET',
    headers,
  })
  const data = await response.json()
  return data
}
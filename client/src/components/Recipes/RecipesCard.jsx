import React from 'react';
import Card from 'react-bootstrap/Card';
import { CgExternal } from "react-icons/cg";
import { shoppingListAdd } from "../../features/userSlice";
import { useDispatch } from "react-redux";

const RecipesCard = ({ recipe }) => {
  const dispatch = useDispatch();



  const addToShoppingList = (ingredientName) => {
    dispatch(shoppingListAdd(ingredientName))
  }




  return (
    <Card className="card-border" style={{ width: '24em' }} >
      <Card.Header className="recipe-headers">
        {recipe.title}
        <a className="redirect-to-recipe" target="_blank" rel="noreferrer" href={recipe.sourceUrl}><CgExternal /></a>
      </Card.Header>
      <Card.Img variant="top" src={recipe.image} />
      <Card.Body>
        <p> You have <span className="ingred-count">{recipe.usedIngredientCount}</span> of the <span className="ingred-count">{recipe.usedIngredientCount + recipe.missedIngredientCount}</span> ingredients to make this recipe!</p>
        <p>Select the missing <span className="ingred-count">{recipe.missedIngredientCount}</span> to add to your shopping list:</p>

        {recipe.missedIngredients.map((ingredient, index) => {
          return <Card.Text className="recipe-ul" key={index}>
            <a className="missed-ingredients" href="#/" onClick={() => addToShoppingList(ingredient.name)}>{ingredient.name}</a>
          </Card.Text>
        })}
      </Card.Body>
    </Card >
  );
};

export default RecipesCard;


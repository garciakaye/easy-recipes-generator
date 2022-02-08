import React from 'react';
import { useSelector } from "react-redux";
import IngredientsCategoryCard from "./IngredientsCategoryCard";

const IngredientsContainer = () => {

  const ingredients = useSelector(state => state.user.all_ingredients)
  const categories = [...new Set(ingredients.map(ingredient => ingredient.category))]


  const renderCategoryCards = categories.map(category => {
    const categoryIngredients = ingredients.filter(ingredient => ingredient.category === category)
    return <IngredientsCategoryCard
      key={category}
      name={category}
      ingredients={categoryIngredients}
    />
  })

  return (
    <div>
      {renderCategoryCards}
    </div>
  );
}

export default IngredientsContainer;

import React, { useState } from 'react';
import IngredientsCategoryCard from "./IngredientsCategoryCard";

const IngredientsContainer = ({ ingredients }) => {

  const categories = [...new Set(ingredients.map(ingredient => ingredient.category))]


  const renderCategoryCards = categories.map( category => {
    const categoryIngredients = ingredients.filter(ingredient => ingredient.category === category)
    return <IngredientsCategoryCard
      key={category}
      name={category}
      ingredients={categoryIngredients}
    />
  })


  return (
    <div>
      { renderCategoryCards }
    </div>
  );
}

export default IngredientsContainer;

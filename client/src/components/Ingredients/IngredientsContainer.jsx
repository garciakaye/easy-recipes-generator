import React from 'react';
import IngredientsCategoryCard from "./IngredientsCategoryCard";

const IngredientsContainer = ({ allIngredients }) => {

  const categories = [...new Set(allIngredients.map(ingredient => ingredient.category))]


  const renderCategoryCards = categories.map(category => {
    const categoryIngredients = allIngredients.filter(ingredient => ingredient.category === category)
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

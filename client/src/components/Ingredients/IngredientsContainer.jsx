import React, { useEffect } from 'react';
import IngredientsCategoryCard from "./IngredientsCategoryCard";
import { getAllIngredients } from "../../features/IngredientsSlice";
import { useDispatch, useSelector } from "react-redux";


const IngredientsContainer = () => {
  const ingredients = useSelector((state) => state.ingredients.items)

  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getAllIngredients())
  }, [dispatch])

  const hasLoadedIngredients = ingredients.length > 0


  if (!hasLoadedIngredients) {
    //or some other type of placeholder
    return null
  }


  const categories = [...new Set(ingredients.map(ingredient => ingredient.category))]


  const renderCategoryCards = categories.map(category => {
    const categoryIngredients = ingredients.filter(ingredient => ingredient.category === category)
    return <IngredientsCategoryCard
      key={category}
      name={category}
      ingredients={categoryIngredients}
    // myIngredients={myIngredients}
    />
  })

  return (
    <div>
      {renderCategoryCards}
    </div>
  );
}

export default IngredientsContainer;

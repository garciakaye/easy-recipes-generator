import React, { useEffect, useState } from 'react';
import IngredientsCategoryCard from "./IngredientsCategoryCard";
import { getAllIngredients } from "../../features/IngredientsSlice";
import { useDispatch, useSelector } from "react-redux";


const IngredientsContainer = () => {
  const ingredients = useSelector((state) => state.ingredients.items)

  const [search, setSearch] = useState("")

  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getAllIngredients())
  }, [dispatch])


  const hasLoadedIngredients = ingredients.length > 0

  if (!hasLoadedIngredients) {
    return null
  }


  const renderCategoryCards = () => {
    const categories = [...new Set(ingredients.map(ingredient => ingredient.category))]

    const ingredientCards = []
    for (const category of categories) {
      const categoryIngredients = ingredients.filter(ingredient => {
        const matchingCategory = ingredient.category === category
        const matchingSearch = ingredient.name.toLowerCase().includes(search.toLowerCase())
        return matchingCategory && matchingSearch
      })
      if (category.toLowerCase() === search.toLowerCase()) {
        return <IngredientsCategoryCard
          key={category}
          name={category}
          ingredients={categoryIngredients}
        />
      }
      ingredientCards.push(<IngredientsCategoryCard
        key={category}
        name={category}
        ingredients={categoryIngredients}
      />)
    }
    return ingredientCards
  }


  const handleChange = event => {
    setSearch(event.target.value);

  };


  return (
    <div>
      <input
        type="text"
        placeholder="🔍"
        value={search}
        onChange={handleChange}
      />
      {renderCategoryCards()}
    </div>
  );
}

export default IngredientsContainer;

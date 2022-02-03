import React, { useState, useEffect } from 'react';
import IngredientsCategoryCard from "./IngredientsCategoryCard";
import { baseUrl } from "../../Globals";

const IngredientsContainer = () => {
  const [ingredients, setIngredients] = useState([]);


  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch(baseUrl + '/ingredients')
  //       const results = await response.json();
  //       console.log(results);
  //       setIngredients(results);
  //     }
  //     catch (e) {
  //       console.error(e);
  //     }
  //   }
  //   fetchData();

  // }, [])

  useEffect(() => {
    fetch(baseUrl + '/ingredients')
      .then((r) => r.json())
      .then((ingredient) => setIngredients(ingredient))
  }, [])


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

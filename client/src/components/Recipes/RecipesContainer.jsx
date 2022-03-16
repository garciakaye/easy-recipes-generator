import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import RecipesCard from "./RecipesCard";
import { apiUrlFindByIngredients } from "../../Globals";
import ReactPaginate from 'react-paginate';
import CircularColor from "../Progress/CircularColor";



const RecipesContainer = () => {

  const itemsPerPage = 10;

  const myIngredients = useSelector((state) => state.user.ingredients);


  const [recipeList, setRecipeList] = useState({});

  const [currentList, setCurrentList] = useState([]);

  const [itemOffset, setItemOffset] = useState(0);

  const [pageCount, setPageCount] = useState(0);



  useEffect(() => {
    if (recipeList.results) {
      const endOffset = itemOffset + itemsPerPage;
      const items = recipeList.results;
      setCurrentList(items.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(items.length / itemsPerPage));
    }
  }, [itemOffset, recipeList.results]);

  useEffect(() => {

    const userIngredientNamesArray = myIngredients.map(ingredient => ingredient.name)
    const getRecipes = async () => {
      const response = await fetch(apiUrlFindByIngredients + userIngredientNamesArray, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_API_KEY
        }
      })

      let recipeData = await response.json()
      setRecipeList(recipeData)
    }
    getRecipes()

  }, [myIngredients])



  const renderRecipeCards = () => {
    return currentList.map(recipe => {
      return <RecipesCard key={recipe.id} recipe={recipe}></RecipesCard>
    })
  }

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % recipeList.results.length;
    setItemOffset(newOffset);
  };




  return (
    <div className="recipes-container">
      {recipeList.results ? renderRecipeCards() : <CircularColor />}
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        containerClassName="pagination"
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
    </div>
  );
};

export default RecipesContainer;

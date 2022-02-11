// import React, { useEffect, useState } from 'react';
// import { useSelector } from "react-redux";

// const SearchIngredients = () => {
//   const userIngredientsNames = useSelector((state) => state.userIngredients.ingredients)


//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const handleChange = event => {
//     setSearchTerm(event.target.value);
//   };
 
//   useEffect(() => {
//     const results = userIngredientsNames.filter(name => name.name.toLowerCase().includes(searchTerm)
//     );
//     setSearchResults(results);
//   }, [searchTerm]);

//   return (
//     <div className="search-ingredients">
//       <input
//         type="text"
//         placeholder="Search"
//         value={searchTerm}
//         onChange={handleChange}
//       />
 

//     </div>
//   )
// }

// export default SearchIngredients;
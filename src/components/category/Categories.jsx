import AppHeader from "../site-header/AppHeader";
import { useEffect, useState } from "react";
import Category from "./Category";


const Categories = () => {
  const [recipes, setRecipe] = useState([]);

//   const fetchCategories = () => {
//     fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) {
//         setRecipe(data.categories);
//       });

//   };

    const fetchCategories = async() =>{
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
        const data = await response.json();
        setRecipe(data.categories);
    }

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <>
      <AppHeader />
      <div className="site-container">
        {recipes.length > 0 && (
          <div className="categories-div">
            {recipes.map((recipe) => (
            <Category 
            category={recipe}
            />
            ))}
          </div>    
        )}
      </div>
    </>
  );
};

export default Categories;

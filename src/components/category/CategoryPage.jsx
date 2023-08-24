import AppHeader from "../site-header/AppHeader"
import {useLocation, useParams} from 'react-router-dom'
import Category from './Category'
import { useEffect, useState } from "react";
import CategoryDetails from "../meal/CategoryDetails";



const CategoryPage = ()=>{
    const [meals, setMeals] = useState([]);
    const {StrCategory} = useParams();

    const fetchCategory = async()=>{
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c="+StrCategory);
        const data = await response.json();
        setMeals(data.meals);
    }
    useEffect(()=>{
        fetchCategory();
    },[]);
    console.log(meals,'---fssa')
    return(
        <>
        <AppHeader/>    
        <div className="site-container">
            <h1>{StrCategory}</h1>
        {meals.length > 0 && (
            <div className="meals-div">
                {meals.map((meal)=>(
                 <CategoryDetails 
                    meal = {meal}
                />)  
                )}
            </div>
        )}
        </div>
        </>
    )

}

export default CategoryPage
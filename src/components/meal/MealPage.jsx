import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './meal.css';
import AppHeader from "../site-header/AppHeader";
import {BsFillCheckCircleFill} from "react-icons/bs"

const MealPage =()=>{
    const[recipe,setRecipe] = useState([]);
    const[ ingredient, setIngredient] = useState([]);
    const {recipeId} = useParams();
    // console.log(recipeId,'--recipeid')

    const fetchMeal = async()=>{
       try{
        let response = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+recipeId);
        let data = await response.json();
        setRecipe(data.meals[0])
       }catch(e){
        console.log(e)
       }
        
    }
    useEffect(()=>{
        fetchMeal();
    },[])
    
    const ingArr = Object.keys(recipe)
    .filter(key => recipe[key]!= null && recipe[key] != "" && key.startsWith("strIngredient"))
    .map(key => ({key, value:recipe[key]}));
    const mesArr = Object.keys(recipe)
    .filter(key => recipe[key]!= null && recipe[key]!=""&& key.startsWith("strMeasure"))
    .map(key=>({key,value:recipe[key]}));
      
    // let instruction = recipe.strInstructions.split(".");
    // console.log(instruction);
    // let instrArr = recipe.strInstructions.split('');
    // console.log(instrArr);
    return(
        <>
            <AppHeader/>
            <div className="meal-div">
                <div className="recipe-img"><img src={recipe.strMealThumb} alt="Meal Image" /></div>
                <h2>{recipe.strMeal}</h2>
                <div className="meal-info">
                <h4>Ingredients</h4>
                <ul>
                    {ingArr.map((item,index)=>{
                        const measureObj = mesArr[index];
                        return(
                               <li> <BsFillCheckCircleFill/> {item.value} ({measureObj.value})</li>
                            )
                    })}
                    </ul>
                    <h4>Instructions</h4>
                    <p>{recipe.strInstructions}</p>
                </div>
            </div>
        </>
    )
}

export default MealPage
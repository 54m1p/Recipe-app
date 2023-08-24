import { useState } from "react";
import AppHeader from "./site-header/AppHeader";
import { useEffect } from "react";
import CategoryDetails from "./meal/CategoryDetails";
import LocationList from "./location/LocationList";

const Home =()=>{
    const[random, setRandom] = useState([]);
    const randomMeal = async ()=>{
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    const data = await response.json();
    setRandom(data.meals[0]);
}
useEffect(()=>{
    randomMeal();
},[]);
    // console.log(random.idMeal,'---randogfm')
    return(
        <>
        <AppHeader/>
        <h3>Meal of the day</h3>
        <CategoryDetails
        meal = {random}
        />
        </>
    )
}

export default Home;
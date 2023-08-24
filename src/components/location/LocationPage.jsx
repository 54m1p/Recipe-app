import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom"
import AppHeader from "../site-header/AppHeader";
import CategoryDetails from "../meal/CategoryDetails";

const LocationPage = ()=>{
    const [meals, setByLocation] = useState();
    const {slug} = useParams();

    const fetchByLocation = async()=>{
        try{
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a='+slug);
            const data = await response.json();
            console.log(data.meals,'--data')
            setByLocation(data.meals);
            console.log(data.meals.length,'--length')
        }catch(e){
            console.log(e);
        }
    }
    useEffect(()=>{
        fetchByLocation();
    },[])
    // console.log(meals.length,'melas')
    return(
        <div>
            <AppHeader/>
            <div className="site-container">
            <h2>{slug}</h2>
            <div className="meals-div">
                {meals && meals.map((meal)=>(
                 <CategoryDetails 
                    meal = {meal}
                />)  
                )}
            </div>
            </div>
        </div>
    )
}

export default LocationPage;
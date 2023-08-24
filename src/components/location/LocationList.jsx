import { useState, useEffect } from "react";
import Area from "./Area";
import AppHeader from "../site-header/AppHeader";
import './location.css'

const LocationList =()=>{
    const [locations, setLocations ] = useState();
    const [image, setImage] = useState();
    const fetchLocations = async() =>{

    try{
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
        const locList = await response.json();
        setLocations(locList.meals)
    }catch(e){
        console.log(e)
    }
    }
    const fetchImg = async()=>{

        try{
            // const response = await fetch('https://random.imagecdn.app/700/700');
            const response = await fetch("https://picsum.photos/200/300")
            const img = await response.json();
            setImage(img);
        }catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        fetchLocations();
        fetchImg();
    },[]);
    return(
        <>
            <AppHeader/>
            <div className="site-container">
            <div className="locations-div">
            {locations &&  locations.map((area,index)=>{
                return(
                    <Area
                        area ={area}
                    />                        
                )
            })}
            </div>
            </div>
        </>
    )
}

export default LocationList
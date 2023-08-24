import { Link } from "react-router-dom";
import '../meal/meal.css'
const CategoryDetails = ({meal}) => {
   
    return(
        <>
            <div className="meal-div">
            <Link to={`/recipe/${meal.idMeal}`}>
            
                <img src={meal.strMealThumb} alt="" height={"150px"} width={"200px"}/>
                <div>{meal.strMeal}</div>
            </Link>
            </div>
        </>
    )
}

export default CategoryDetails;
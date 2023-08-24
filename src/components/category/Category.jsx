import './Category.css'
import { Link } from 'react-router-dom';

const Category =({category}) =>{
        
    return(
        <>
        <Link to={`/category/${category.strCategory}`}>
            
        <div className="category-div">
            <img src={category.strCategoryThumb} alt="" height={"150px"} width={"200px"}/>
            <div>{category.strCategory}</div>
        </div>
        </Link>
        </>
    )
}

export default Category
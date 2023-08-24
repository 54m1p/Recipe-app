import { useState } from 'react';
import './SiteHeader.css'
import  {BsSearch}  from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
const AppHeader = () =>{
    const[isLocationHover, setLocationHover] = useState(false);
    const locationHoverFn = ()=>{
        {isLocationHover && console.log('hover') }
    }
    return(
        <div className="head-section">
            <div className='site-container site-header'>
            <h2 className="site-head">
                <Link to={`/`}><span>Home</span></Link>
              <Link to={`/categories`}>  <span>Categories</span> </Link>
                <Link to={`/location`}><span>Location</span></Link>
                <Link to={`/ingredients`}><span>Ingredients</span></Link>
            </h2>
            {/* <label htmlFor="head-search">Search..</label> */}
            <div className='head-search'>
                <input type="text" name="head-search" id="head-search" placeholder="Search" />
                <span className='search-btn' id='head-search-btn'><BsSearch/></span>
            </div>
            </div>
        </div>
    )
}

export default AppHeader;   
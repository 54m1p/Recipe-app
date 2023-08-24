import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import CategoryPage from './components/category/CategoryPage.jsx'
import MealPage from './components/meal/MealPage.jsx'
import Categories from './components/category/Categories.jsx'
import LocationList from './components/location/LocationList.jsx'
import LocationPage from './components/location/LocationPage.jsx'
import Ingredients from './components/ingredient/ingredients.jsx'

const router =  createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/categories",
    element: <Categories/>
  },
  {
    path: "category/:StrCategory",
    element: <CategoryPage/>
  },
  {
    path :"recipe/:recipeId",
    element: <MealPage/>
  },
  {
    path :"/location",
    element:<LocationList/>
  },
  {
    path :"location/:slug",
    element:<LocationPage/>
  },
  {
    path :"/ingredients",
    element:<Ingredients/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router}/>
  </React.StrictMode>,
)

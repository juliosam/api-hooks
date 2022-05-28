import { useState } from "react";
import { useEffect } from "react";

export default function App() {

 const[data, setData] = useState([]);
 const[dishList, setDishList] = useState([]);
 const[categories, setCategories] =useState([]);

 useEffect(()=>{consumeApi()},[]);
 useEffect(()=>{DishList()},[]);
 useEffect(()=>{Categorie()},[]);

 const consumeApi = async(e)=>{
   const data = await fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${e.target.innerHTML}`)
   const getResult = await data.json()
   setData(getResult.meals)
   console.log(getResult)
 }

 const DishList = async(e)=>{
  const data = await fetch (`https://www.themealdb.com/api/json/v1/1/filter.php?c=${e.target.innerHTML}`)
  const getResult= await data.json()
  setDishList(getResult.meals)
  console.log(getResult)
}

 const Categorie = async()=>{
   const data = await fetch ("https://www.themealdb.com/api/json/v1/1/categories.php")
   const getResult= await data.json()
   setCategories(getResult.categories)
   console.log(getResult)
 }
  return (
    <>
    <div className="categories">
      <h3>Select Categorie</h3>
      <ul>{categories.map(x=>{return (<li onClick={DishList}>{x.strCategory}</li>)})}</ul>
    </div>
    <div className="dish-list">
      <h4>Dishes from categorie</h4>
      <ul>{dishList.map(x=>{return (<li onClick={consumeApi}>{x.strMeal}</li>)})}</ul>
    </div>
    {
      data.map(dish=>{
        return(
          <>
          <div className="dish-uper-wrapper">
            <div className="dish-uper-wrapper__text">
              <h1>{dish.strMeal}</h1>
              <p>{dish.strCategory} dish representative of the {dish.strArea} cuisine</p>
              <h4>Ingredients:</h4>
              <ul> 
                <li key={1}>{dish.strIngredient1}:  {dish.strMeasure1}</li>
                <li key={2}>{dish.strIngredient2}:  {dish.strMeasure2}</li>
                <li key={3}>{dish.strIngredient3}:  {dish.strMeasure3}</li>
                <li key={4}>{dish.strIngredient4}:  {dish.strMeasure4}</li>
                <li key={5}>{dish.strIngredient5}:  {dish.strMeasure5}</li>
                <li key={6}>{dish.strIngredient6}:  {dish.strMeasure6}</li>
                <li key={7}>{dish.strIngredient7}:  {dish.strMeasure7}</li>
                <li key={8}>{dish.strIngredient8}:  {dish.strMeasure8}</li>
                <li key={9}>{dish.strIngredient9}:  {dish.strMeasure9}</li>
              </ul> 
            </div>
            <img className="dish-photo" alt={dish.strMeal} src={dish.strMealThumb}></img>
          </div>
          <div className="dish-down-wrapper">
            <p>{dish.strInstructions}</p>
  
            <span>Tags:{dish.strTags}</span>
            <br/>
            <span>For a visual reference watch <a href="{dish.strYoutube}">{dish.strYoutube}</a></span>
          </div>
          </>
        )
      })
    }
    </>
  );
}


import { useRef, useState } from "react";
import { useEffect } from "react";
import Select from "./components/Select";
import useOnScreen from "./cusmoHooks/useOnScreen";

export default function App() {

 const[data, setData] = useState([]);
 useEffect(()=>{consumeApi()},[]);

 const consumeApi = async(e)=>{
   const data = await fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${e.target.innerHTML}`)
   const getResult = await data.json()
   setData(getResult.meals)
   console.log(getResult)
 }
 
 const linkRef = useRef()
 const visible = useOnScreen(linkRef, "-100px")

  return (
    <>
    <Select consumeApi={consumeApi}/>
    {data.map(dish=>{
        return(
          <>
          <div className="dish-uper-wrapper">
            <div className="dish-uper-wrapper__text">
              <h1 ref={linkRef}> {visible && `${dish.strMeal}`}</h1>
              <p>{dish.strCategory} dish representative of the {dish.strArea} cuisine</p>
              <h4>Ingredients:</h4>
              <ul> 
                <li >{dish.strIngredient1}:  {dish.strMeasure1}</li>
                <li >{dish.strIngredient2}:  {dish.strMeasure2}</li>
                <li >{dish.strIngredient3}:  {dish.strMeasure3}</li>
                <li >{dish.strIngredient4}:  {dish.strMeasure4}</li>
                <li >{dish.strIngredient5}:  {dish.strMeasure5}</li>
                <li >{dish.strIngredient6}:  {dish.strMeasure6}</li>
                <li >{dish.strIngredient7}:  {dish.strMeasure7}</li>
                <li >{dish.strIngredient8}:  {dish.strMeasure8}</li>
                <li >{dish.strIngredient9}:  {dish.strMeasure9}</li>
              </ul> 
            </div>
            <img className="dish-photo" alt={dish.strMeal} src={dish.strMealThumb}></img>
          </div>
          <div className="dish-down-wrapper">
            <h3>Instructions:</h3>
            <p>{dish.strInstructions}</p>
  
            <span>Tags:  {dish.strTags}</span>
            <br/>
            <span >For a visual reference watch"  < a href="{dish.strYoutube}" >{dish.strYoutube} </a>
              </span>
          </div>
          </>
        )
      })
    }
    </>
  );
}


import { useEffect } from "react";
import { useState } from "react";

const Select = ({consumeApi}) => {

  const[dishList, setDishList] = useState([]);
  const[categories, setCategories] =useState([]);
  useEffect(()=>{DishList()},[]);
  useEffect(()=>{Categorie()},[]);

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
      <h4>Dishes from categorie </h4>
      <ul>{dishList.map(x=>{return (<li onClick={consumeApi}>{x.strMeal}</li>)})}</ul>
    </div>
    </>
  );
}
export default Select;
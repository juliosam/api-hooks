
export default function Categories ({setCategories}){

    useEffect(()=>{Categorie()},[]);

    const Categorie = async()=>{
        const data = await fetch ("https://www.themealdb.com/api/json/v1/1/categories.php")
        const getResult= await data.json()
        setCategories(getResult.categories)
        console.log(getResult)
      }
    return ( 
    <div className="categories">
      <h3>Select Categorie</h3>
      <ul>{setCategories.map(x=>{return (<li onClick={DishList}>{x.strCategory}</li>)})}</ul>
    </div>
     );
}
 
e
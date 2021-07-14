import React from "react"
import Loadings from "../Component/Loadings"
import { useParams  } from "react-router"
import {Link } from "react-router-dom"
import "../App.css"
const url="https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="
 const SingleCocktail=()=>{
     const [loading,setLoading]=React.useState(false);
     const [cocktail,setCocktail]=React.useState(null);
     const {id}=useParams();
React.useEffect(()=>{
setLoading(true);
async function getCokctail(){
    try
    {
   const response = await fetch(`${url}${id}`);
   const data= await response.json();
   console.log(data);
   if(data.drinks){
       const {strDrink:name,
    strDrinkThumb:image,
strAlcoholic:info,
strCategory:category,
strGlass:glass,
strInstructions:instructions,
strIngredient1,
strIngredient2,
strIngredient3,
strIngredient4,
strIngredient5,
}=data.drinks[0]
const ingredients=[
    strIngredient1,
strIngredient2,
strIngredient3,
strIngredient4,
strIngredient5,
]
const newCocktail={
    name,image,info,category,glass,instructions,ingredients
}
setCocktail(newCocktail);
   }
   else
   {
       setCocktail(null);
   }
   setLoading(false);
    }
    catch(error)
{
    console.log(error);
    setLoading(false);
}
}
getCokctail();
},[id])
if(loading)
{
    return<Loadings/>
}
if(!cocktail)
{
    return <h2 className="section-title">no cocktail to display</h2>
}
const { name,image,info,category,glass,instructions,ingredients}=cocktail;
     return(
         <section className="section cocktail-section">
             <Link to="/" className="btn btn-primary">Home</Link>
<h2 className="section-title">{name}</h2>
<div className="drink">
    <img src={image} alt={name}/>
    <div className="drink-info">
        <p>
            <span className="drink-data">Name :</span>
            {name}
        </p>
        <p>
            <span className="drink-data">Category :</span>
            {category}
        </p>
        <p>
            <span className="drink-data">Info :</span>
            {info}
        </p>
        <p>
            <span className="drink-data">Glass :</span>
            {glass}
        </p>
        <p>
            <span className="drink-data">Instruction's :</span>
            {instructions}
        </p>
        <p>
            <span className="drink-data">Ingredients :</span>
            {ingredients.map((items,index)=>{
                return items? <span key={index}>{items}</span> :null;
            })}
        </p>
    </div>
</div>
         </section>
     )
 }
 export default SingleCocktail;
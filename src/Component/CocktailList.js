import React from "react"
import {useGlobalContext} from "../Context"
import Loadings from "./Loadings"
import "../App.css"
import Cocktail from "./Cocktail"
 const CocktailList=()=>{
     const {Loading,  cocktails}=useGlobalContext();
     if(Loading)
     {
         return <Loadings/>
     }
     if(cocktails.length<1)
     {
       return(  <h2 className="section-title">
             Not found
         </h2>
       )
     }
     return(
         <section className="section">
        <h2 className="section-title">
            cocktails
        </h2>
        <div className="cocktails-center">
     {cocktails.map((item)=>{
         return <Cocktail key={item.id}{...item}/>
     })}
          </div>
         </section>
     )
 }
 export default CocktailList;
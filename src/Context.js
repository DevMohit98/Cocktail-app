import React, { useContext, useEffect, useState,useCallback } from "react"
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext=React.createContext()
const AppProvider=({children})=>{
    const [Loading,setLoading]=useState(true);
    const [searchTrem,setSearch]=useState("a");
    const [cocktails,setCocktails]=useState([]);
    const fetchlist=useCallback (async()=>{
        setLoading(true);
        try{
            const response=await fetch(`${url}${searchTrem}`);
            const data =await response.json();
            console.log(data);
           const {drinks}=data;
           if(drinks){
               const newDrinks=drinks.map((item)=>{
                   const {idDrink,
                    strDrink,
                    strDrinkThumb,
                    strAlcoholic,
                    strGlass}=item;

                    return{id: idDrink,
                        name: strDrink,
                        image: strDrinkThumb,
                        info: strAlcoholic,
                        glass: strGlass,}
               })
               setCocktails(newDrinks);
           }
           else{
               setCocktails([]);
           }
           setLoading(false);

        } catch(error){
            console.log(error);
            setLoading(false);
        }

    },[searchTrem])
    useEffect(()=>{
        fetchlist();
    },[searchTrem,fetchlist])
    return(
        <AppContext.Provider value={{
            Loading,
            cocktails,
            setSearch,
        }}>
            {children}
            </AppContext.Provider>
    )

}
export const useGlobalContext=()=>{
    return useContext(AppContext);
}
export {AppContext,AppProvider};
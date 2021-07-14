import React from "react"
import { BrowserRouter as Router,Route,Switch } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import SingleCocktail from "./Pages/SingleCocktail"
import Error from "./Pages/Error"
import Navbar from "./Component/Navbar"
import "./App.css"
 const App=()=>{
   return(
<Router>
<Navbar/>
<Switch>
  <Route exact path="/">
    <Home/>
  </Route>
  <Route path="/about">
    <About/>
  </Route>
  <Route exact path="/cocktail/:id">
    <SingleCocktail/>
  </Route>
  <Route  path="*">
    <Error/>
  </Route>
</Switch>
</Router>
   )
 }
 export default App
import React from "react"
import "../App.css"
import { Link } from "react-router-dom"
 const Error=()=>{
     return(
         <section className="error-page section">
        <div className="error-container">
            <h1>Page Not Found Error 404</h1>
            <Link to="/" className="btn btn-primary">
             back home
            </Link>
        </div>
         </section>
     )
 }
 export default Error
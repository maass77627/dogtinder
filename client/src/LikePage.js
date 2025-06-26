import React from "react";
// import { NavLink } from "react-router-dom";
import "./LikePage.css";

function LikePage({ like }) {
console.log(like)



    return(
        
        <div id="likepage">
            {/* <NavLink id="links" to="/">Home Page</NavLink> */}
            <h1>{like.dog.name}</h1>
            <img id="likeimage" src={like.dog.image} alt="dog"></img>
        
        
        </div>
    )
}

export default LikePage
import React from "react";
import "./LikePage.css";

function LikePage({ like }) {
console.log(like)



    return(
        
        <div id="likepage">
            <h1>{like.dog.name}</h1>
            <img id="likeimage" src={like.dog.image} alt="dog"></img>
        </div>
    )
}

export default LikePage
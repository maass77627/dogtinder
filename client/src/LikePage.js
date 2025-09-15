import React from "react";
import "./LikePage.css";

function LikePage({ like }) {
console.log(like)



    return(
        <div id="likepage">
           {like.dog ? <h1>{like.dog.name}</h1> : null }
           {like.dog ? <img id="likeimage" src={like.dog.image} alt="dog"></img> : null }
        </div>
    )
}

export default LikePage
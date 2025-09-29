import React from "react";
import "./LikePage.css";

function LikePage({ like, likes, setLikes }) {
console.log(like)



function handleDelete(id) {

    fetch(`/likes/${id}`, {
        method: "DELETE"
    })
      let newlikes = likes.filter((lik) => lik.id !== id)
      setLikes(newlikes)

}

    return(
        <div id="likepage">
           {like.dog ? <h1>{like.dog.name}</h1> : null }
           {like.dog ? <img id="likeimage" src={like.dog.image} alt="dog"></img> : null }
           <button onClick={() =>handleDelete(like.id)}>delete</button>
        </div>
    )
}

export default LikePage
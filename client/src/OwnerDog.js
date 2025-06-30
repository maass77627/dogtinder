import React from "react";
import "./Owner.css"

function OwnerDog({dog}) {


    return(


        <div id="ownerdog">
            <h1>{dog.name}</h1>
            <img id="ownerdogimg" src={dog.image} alt="dog"></img>


        </div>
    )
}

export default OwnerDog
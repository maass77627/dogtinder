import React from "react";
import "./Owner.css"
import { useState } from "react";
import Edit from "./Edit";

function OwnerDog({dog, user, setDogs, dogs}) {

    const [toggle, setToggle] = useState(false)


    function handleDelete() {
        let id = dog.id
        fetch(`/dogs/${id}`, {
            method: "DELETE"
        })
        let newdogs = dogs.filter((doggy) => doggy.id !== dog.id)
        setDogs(newdogs)
    }


    function handleEdit() {
        setToggle(!toggle)
    }

    return(


        <div id="ownerdog">
            <h1 id="dogname">{dog.name}</h1>
            <img id="ownerdogimg" src={dog.image} alt="dog"></img>
            <p id="p">{dog.age}</p>
            <p id="p">{dog.interests}</p>
            <p id="p">{dog.details}</p>
            <button id="button2" onClick={handleEdit}>edit</button><button id="button" onClick={handleDelete}>delete</button>
            { toggle ? <Edit setDogs={setDogs} dogs={dogs} dog={dog} user={user}></Edit> : null } 
        </div>
        
    )
}

export default OwnerDog
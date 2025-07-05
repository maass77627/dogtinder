import React from "react";
import "./Owner.css"
import { useState } from "react";
// import DogEditForm from "./DogEditForm";
import Edit from "./Edit";

function OwnerDog({dog, user, setDogs, dogs}) {

    const [toggle, setToggle] = useState(false)


    function handleDelete() {
        console.log("delete")
        let id = dog.id
        fetch(`/dogs/${id}`, {
            method: "DELETE"
        })
        let newdogs = dogs.filter((doggy) => doggy.id !== dog.id)
        setDogs(newdogs)
    }


    function handleEdit() {
        console.log("handleedit")
        setToggle(!toggle)
    }

    return(


        <div id="ownerdog">
            <h1 id="dogname">{dog.name}</h1>
            <img id="ownerdogimg" src={dog.image} alt="dog"></img>
           <button id="button2" onClick={handleEdit}>edit</button><button id="button" onClick={handleDelete}>delete</button>
           {/* <Edit user={user} dog={dog}></Edit> */}
            { toggle ? <Edit dog={dog} user={user}></Edit> : null } 
        </div>
        
    )
}

export default OwnerDog
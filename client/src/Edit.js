import React from "react";
import { useState } from "react";
import "./EditForm.css";

function Edit ({ user, dog}) {
    console.log(user)
    console.log(dog)

    const [name, setName] = useState("")
    const[age, setAge] = useState("")
    const[interests, setInterests] = useState("")
    const[details, setDetails] = useState("")
    const[image, setImage] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        let id= dog.id
        fetch(`/dogs/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name: name, age: age, interests: interests, details: details, image: image})

        })
        .then((response) => response.json())
        .then((json) => {console.log(json)})

    }



    return (
        <div>
            <form id="editform" onSubmit={handleSubmit}>
               <h3>Edit Dog</h3>
                <input type="text" value={name} placeholder={dog.name} onChange={(e) => setName(e.target.value)}></input><br></br>
                <input type="text" value={age} placeholder={dog.age} onChange={(e) => setAge(e.target.value)}></input><br></br>
                <input type="text" value={interests} placeholder={dog.interests} onChange={(e) => setInterests(e.target.value)}></input><br></br>
                <input type="text" value={details} placeholder={dog.details} onChange={(e) => setDetails(e.target.value)}></input><br></br>
                <input type="text" value={image} placeholder={dog.image} onChange={(e) => setImage(e.target.value)}></input><br></br>
                <input type="submit" value="submit"></input>
            </form>
        </div>
    )
}

export default Edit
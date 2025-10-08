import React from "react";
import { useState } from "react";
import "./EditForm.css";
// import { SecurityUpdateGoodSharp } from "@mui/icons-material";

function Edit ({ user, dog, dogs, setDogs}) {
    console.log(user)
    console.log(dog)
    const [dogData, setDogData] = useState({
        name: dog.name,
        age: dog.age,
        interests: dog.interests,
        details: dog.details,
        image: dog.image
    })

    function handleNameChange(e){
        setDogData({
            ...dogData, 
            name: e.target.value
        })

    }

    function handleAgeChange(e) {
        setDogData({
            ...dogData, 
           age: e.target.value
        })

    }

    function handleInterestsChange(e) {
        setDogData({
            ...dogData, 
           interests: e.target.value
        })

    }

    function handleDetailsChange(e) {
        setDogData({
            ...dogData, 
           details: e.target.value
        })

    }

    function handleImageChange(e) {
        setDogData({
            ...dogData, 
           image: e.target.value
        })

    }



    function handleSubmit(e) {
        e.preventDefault()
        let id= dog.id
        fetch(`/dogs/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            // body: JSON.stringify({name: name, age: age, interests: interests, details: details, image: image})
            body: JSON.stringify(dogData)

        })
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
             let newdogs = dogs.map((doggy) => doggy.id === id ? json : doggy)
             setDogs(newdogs)
        })

    }



    return (
        <div id="edit">
            <form id="editform" onSubmit={handleSubmit}>
               <h3>Edit Dog</h3>
               <input type="text" value={dogData.name} placeholder={dog.name} onChange={handleNameChange}></input><br></br>
                <input type="text" value={dogData.age} placeholder={dog.age} onChange={handleAgeChange}></input><br></br>
                <input type="text" value={dogData.interests} placeholder={dog.interests} onChange={handleInterestsChange}></input><br></br>
                <input type="text" value={dogData.details} placeholder={dog.details} onChange={handleDetailsChange}></input><br></br>
                <input type="text" value={dogData.image} placeholder={dog.image} onChange={handleImageChange}></input><br></br>
                <input type="submit" value="submit"></input>
                
            </form>
        </div>
    )
}

export default Edit
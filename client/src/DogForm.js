import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./DogForm.css"
import "./Owner.css"


function DogForm({ user, dogs, setDogs }) {
    
    const [name, setName] = useState("")
    const[age, setAge] = useState("")
    const[interests, setInterests] = useState("")
    const[details, setDetails] = useState("")
    const[image, setImage] = useState("")


    function handleSubmit(e) {
       e.preventDefault()
         fetch(`/users/${user.id}/dogs`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name: name, age: age, interests: interests, details: details, image: image, user_id: user.id})
        })
        .then((response) => response.json())
        .then((json) => {
        setDogs([...dogs, json])
        console.log((json))})
        

    }

    return(


        <div id="dogform">
            <NavLink id="links" to="/owners">Home Page</NavLink>
            <h2>Add your Pet</h2>
            <form  onSubmit={handleSubmit}>
                <label>Name: </label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input> <br></br>
                <label>Age: </label>
                <input type="text" value={age} onChange={(e) => setAge(e.target.value)}></input> <br></br>
                <label>Interests: </label>
                <input type="text" value={interests} onChange={(e) => setInterests(e.target.value)}></input> <br></br>
                <label>Details: </label>
                <input type="text" value={details} onChange={(e) => setDetails(e.target.value)}></input> <br></br>
                <label>Image: </label>
                <input type="text" value={image} onChange={(e) => setImage(e.target.value)}></input><br></br>
                {/* <label>UserId: </label> */}
                {/* <input type="text" value={formData.user_id} onChange={((e) => handleIdChange(e))}></input><br></br> */}
                <input type="submit" value="submit" ></input>
            </form>

        </div>
    )
}

export default DogForm
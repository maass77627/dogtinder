import React from "react";
import { useState } from "react";
import "./DogForm.css"


function DogForm({ user }) {

    const [formData, setFormData] = useState({
        name: "betty",
        age: 7,
        interests: "fetch, swimming, sleeping", 
        details: "currently being fostered, love cats and kids", 
        image: "dog5.jpg"
    })

    function handleNameChange(e) {
        console.log(e)
        setFormData({
            ...formData, 
          name: e.target.value
        })

    }

    function handleAgeChange(e) {
        console.log(e)
        setFormData({
            ...formData, 
          age: e.target.value
        })

    }

    function handleInterestsChange(e) {
        console.log(e)
        setFormData({
            ...formData, 
          interests: e.target.value
        })

    }

    function handleDetailsChange(e) {
        console.log(e)
        setFormData({
            ...formData, 
          details: e.target.value
        })

    }

    function handleImageChange(e) {
        console.log(e)
        setFormData({
            ...formData, 
          image: e.target.value
        })

    }

    // function handleIdChange(e) {
    //     console.log(e)
    //     setFormData({
    //         ...formData, 
    //       user_id: e.target.value
    //     })

    // }

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`/users/${user.id}/dogs`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({formData})
        })
        .then((response) => response.json())
        .then((json) => console.log((json)))

    }

    return(


        <div id="dogform">
            <h2>Add your Pet</h2>
            <form  onSubmit={handleSubmit}>
                <label>Name: </label>
                <input type="text" value={formData.name} onChange={((e) => handleNameChange(e))}></input> <br></br>
                <label>Age: </label>
                <input type="text" value={formData.age} onChange={((e) => handleAgeChange(e))}></input> <br></br>
                <label>Interests: </label>
                <input type="text" value={formData.interests}onChange={((e) => handleInterestsChange(e))}></input> <br></br>
                <label>Details: </label>
                <input type="text" value={formData.details} onChange={((e) => handleDetailsChange(e))}></input> <br></br>
                <label>Image: </label>
                <input type="text" value={formData.image} onChange={((e) => handleImageChange(e))}></input><br></br>
                {/* <label>UserId: </label> */}
                {/* <input type="text" value={formData.user_id} onChange={((e) => handleIdChange(e))}></input><br></br> */}
                <input type="submit" value="submit" ></input>
            </form>
        </div>
    )
}

export default DogForm
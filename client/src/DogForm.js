import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./DogForm.css"
// import "./Owner.css"
import Interest from "./Interest";


function DogForm({ user, dogs, setDogs, interests, interest }) {
    console.log(interests)
    
    const [name, setName] = useState("")
    const[age, setAge] = useState("")
    const[doginterests, setDogInterests] = useState([])
    const[details, setDetails] = useState("")
    const[image, setImage] = useState("")
    const[gender, setGender] = useState("")
    const[interestIds, setInterestIds] = useState([])
    // const[interestedin, setInterestedin] = useState("")
    const[lookingfor, setLookingfor] = useState("")


    function handleInterestClick(event, interest) {
        console.log(event)
        console.log(interest)
        console.log(doginterests)
        event.target.style.backgroundColor = 'purple';
        // event.target.style.background-color: blue
        setDogInterests([
            ...doginterests, 
            interest

        ])

        setInterestIds([
            ...interestIds,
            interest.id
        ])
        
    }


    function handleSubmit(e) {
       e.preventDefault()
       console.log(doginterests)
       console.log(interestIds)
       console.log(gender)
    //    fetch(`/dogs`, {
          fetch(`/users/${user.id}/dogs`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name: name, age: age, details: details, image: image, user_id: user.id, gender: gender, lookingfor: lookingfor, interests_attributes: doginterests, interest_ids: interestIds})
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
                <label id="label">Name </label><br></br>
                <input id="input" type="text" value={name} onChange={(e) => setName(e.target.value)}></input> <br></br>
                <label id="label">Age </label><br></br>
                <input id="input" type="text" value={age} onChange={(e) => setAge(e.target.value)}></input> <br></br>
                <label id="label">Gender</label><br></br>
                <br></br>
                <label>male</label>
                <input type="radio" value="male" checked={gender === "male"} onChange={(e) => setGender(e.target.value)}></input>
                <label>female</label>
                <input type="radio" value="female" checked={gender === "female"} onChange={(e) => setGender(e.target.value)}></input><br></br>


                <label id="label">Interests</label><br></br>
                <br></br>
                <br></br>
                {interests.map((interest) => <Interest key={interest.id} interest={interest} handleInterestClick={handleInterestClick}></Interest>)}<br></br>
                
                <label id="label">Looking For</label><br></br>
                <input id="input" type="text" value={lookingfor} onChange={(e) => setLookingfor(e.target.value)}></input> <br></br>
               
                <label id="label">Details </label><br></br>
                <input id="input" type="text" value={details} onChange={(e) => setDetails(e.target.value)}></input> <br></br>
                <label id="label">Profile photos </label><br></br>
                <input id="input" type="text" value={image} onChange={(e) => setImage(e.target.value)}></input><br></br>
                <input type="submit" value="submit" ></input>
            </form>

        </div>
    )
}

export default DogForm
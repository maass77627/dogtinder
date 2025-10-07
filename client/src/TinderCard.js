import React from "react";
import Buttons from "./Buttons"
import './TinderCards.css';
// import Interest from "./Interest";

function TinderCard ({ dog, dogs, user, setDogs}) {
        console.log(dog)
        console.log("tindercard")
        console.log(dog.interests)

return (
    <div
        style={{ backgroundImage: `url(${dog.image})`}}
        className="card"
        >
        <div id="info">
        <p id="active">Recently Active</p>
        <h3 id="name">{dog.name}</h3>  <p id="age">{dog.age}</p>
        {/* <p id="gender">{dog.gender}</p>
        {dog.interests ? dog.interests.map((int) => <span id="interesttinder">{int.name}</span>) : null} */}
        
        <p id="description">{dog.details}</p>
        </div>
            <Buttons dog={dog} dogs={dogs} user={user} setDogs={setDogs}></Buttons>
        </div>
       )
}

export default TinderCard
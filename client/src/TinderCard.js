import React from "react";
import Buttons from "./Buttons"
import './TinderCards.css';

function TinderCard ({ dog, dogs, user, setDogs}) {


    // const onSwipe = (direction) => {
    //     if direction === "right"
    //     console.log('You swiped: ' + direction)
    //    }


return (
    <div
        style={{ backgroundImage: `url(${dog.image})`}}
        className="card"
        >
        <div id="info">
        <p id="active">Recently Active</p>
        <h3 id="name">{dog.name}</h3>
        <p id="age">{dog.age}</p>
        <p id="description">{dog.details}</p>
        </div>


        <Buttons dog={dog} dogs={dogs} user={user} setDogs={setDogs}></Buttons>
        </div>
       

)


}

export default TinderCard
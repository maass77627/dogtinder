import React from "react";
import Dog from "./Dog"
import { NavLink } from "react-router-dom";
// import TinderCard from "react-tinder-card";

function DogContainer({ dogs }) {
    console.log(dogs)


    return (
        

        <div id="background">
        <NavLink id="links" to="/">Home Page</NavLink>

        
                {dogs ? dogs.map((dog) => <Dog key={dog.name} preventSwipe={['up', 'down']} className="swipe" dog={dog}   ></Dog>) : null}

        

        </div>
    )


}

export default DogContainer
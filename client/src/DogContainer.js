import React from "react";
// import Dog from "./Dog"
import { NavLink } from "react-router-dom";
import TinderCard from "react-tinder-card";
import './TinderCards.css';

function DogContainer({ dogs }) {
    console.log(dogs)


    return (
        

        <div id="background">
        <NavLink id="links" to="/">Home Page</NavLink>
            <div className="tinderCards_cardContainer">

                {dogs.map((dog) => <TinderCard 
                key={dog.name} 
                preventSwipe={['up', 'down']} 
                className="swipe" 
                dog={dog}>
                <div
                style={{ backgroundImage: `url(${dog.image})`}}
                className="card"
                >
                    <h3>{dog.name}</h3>

                </div>


                </TinderCard>)}

                </div>

        

        </div>
    )


}

export default DogContainer
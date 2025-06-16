import React from "react";
// import Dog from "./Dog"
import { NavLink } from "react-router-dom";
import TinderCard from "react-tinder-card";
import './TinderCards.css';
import Buttons from "./Buttons"
import Footer from "./Footer";

function DogContainer({ dogs, user }) {
    console.log(dogs)
    console.log(user)

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
      }


    return (
        

        <div id="background">
        <NavLink id="links" to="/">Home Page</NavLink>
            <div className="tinderCards_cardContainer">

                {dogs.map((dog) => <TinderCard 
                key={dog.name} 
                preventSwipe={['up', 'down']} 
                onSwipe={onSwipe}
                className="swipe" 
                dog={dog}>
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
                </div>


                </TinderCard>)}
                <Buttons dogs={dogs} user={user}></Buttons>  
                </div>

        
                    <Footer></Footer>
        </div>
    )


}

export default DogContainer
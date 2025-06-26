import React from "react";
import { NavLink } from "react-router-dom";
import TinderCard from "react-tinder-card";
import './TinderCards.css';
import Footer from "./Footer";
 import { useState } from "react"
import Buttons from "./Buttons"

function DogContainer ({ dogs, user, setDogs }) {
    console.log(dogs)
    console.log(user)
    
    const [currentDogName, setCurrentDogName] = useState("spot")
    //   const [direction, setDirection] = useState("not set")
    

        function onSwipe(direction, dog, e) {
            // console.log(e)
            // console.log(direction)
            // console.log(user)
            // console.log(name)
            // console.log(dog)
            let newdog = dogs.find((doggy) => doggy.name === dog.name)
            let id = user.id
            let idtwo = newdog.id
            setCurrentDogName(dog.name)
            // setDirection(direction)
            console.log(newdog)
            console.log(id)
            console.log(idtwo)

            if (direction === "left") {
            fetch(`/dogs/${newdog.id}`, {
                method: "DELETE",
              })

             let newdogs = dogs.filter((doggy) => doggy.id !== newdog.id)
             setDogs(newdogs)
             console.log('You swiped: ' + direction)

         } else {
                fetch(`/likes`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }, 
                body: JSON.stringify({user_id: id, dog_id: idtwo})
            })
            console.log('You swiped: ' + direction)
         }
         }




    return (

       <div id="background">
        <NavLink id="links" to="/">Home Page</NavLink>
            <div className="tinderCards_cardContainer">

                {dogs.map((dog) => (
                    <div key={dog.id} >
                        <TinderCard 
                            // key={dog.name} 
                            currentDogName={currentDogName}
                            //   direction={direction}
                              dog={dog}
                              user={user}
                              setDogs={setDogs}
                              preventSwipe={['up', 'down']} 
                              onSwipe={(direction, e) => onSwipe(direction, dog, e)}
                              className="swipe" 
                            >
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
            <Buttons dog={dog} dogs={dogs} user={user} setDogs={setDogs} ></Buttons>
        </div>
                        </TinderCard>
                        
                    </div>
                ))}
                </div>
            <Footer></Footer>
        </div>
    )


}

export default DogContainer
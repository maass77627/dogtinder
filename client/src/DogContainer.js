import React from "react";
import { NavLink } from "react-router-dom";
import TinderCard from "react-tinder-card";
 import './TinderCards.css';
// import Buttons from "./Buttons";
import Footer from "./Footer";
import { useState } from "react"

function DogContainer ({ dogs, user, setDogs }) {
    console.log(dogs)
    console.log(user)
     const [currentDogName, setCurrentDogName] = useState()
    //  const [direction, setDirection] = useState()
    

        const onSwipe = (direction, name) => {
            // console.log(direction)
            console.log(name)
            // console.log(dog)
            let newdog = dogs.find((dog) => dog.name === name)
            let id = user.id
            let idtwo = newdog.id
            console.log(newdog)
            setCurrentDogName(name)
            // setDirection(direction)
            

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
        //  console.log(direction)
         console.log(currentDogName)
         
         
        }




    return (

       <div id="background">
        <NavLink id="links" to="/">Home Page</NavLink>
            <div className="tinderCards_cardContainer">

                {dogs.map((dog) => (
                    <div>
                        <TinderCard 
                            key={dog.id} 
                            //   currentDogName={currentDogName}
                            //  direction={direction}
                            // dog={dog}
                            // user={user}
                            // setDogs={setDogs}
                            preventSwipe={['up', 'down']} 
                            // onSwipe={(dir) => }
                            // onSwipe={(dir) => swiped(dir, character.name)}
                            onSwipe={onSwipe}
                            className="swipe" 
                            >
                        </TinderCard>
                        
                    </div>
                ))}
                
                   {/* <Buttons  dogs={dogs} user={user} setDogs={setDogs}></Buttons>     */}
                </div>

        
                    <Footer></Footer>
        </div>
    )


}

export default DogContainer
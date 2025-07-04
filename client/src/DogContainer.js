import React from "react";
import { NavLink } from "react-router-dom";
import TinderCard from "react-tinder-card";
import './TinderCards.css';
import Footer from "./Footer";
import Buttons from "./Buttons"



function DogContainer ({ dogs, user, setDogs, comments, setComments, likes, setLikes }) {
    
    // const [hidden, setHidden] = useState(true)
   
    

        function onSwipe(direction, dog, e) {
            console.log(e)
            let newdog = dogs.find((doggy) => doggy.name === dog.name)
            let id = user.id
            let idtwo = newdog.id
        
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
            .then((response) => response.json())
            .then((json) => {
                let newlikes = [...likes, json]
                setLikes(newlikes)
                console.log(likes)
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
                              dog={dog}
                              user={user}
                              setDogs={setDogs}
                              preventSwipe={['up', 'down']} 
                              onSwipe={(direction, e) => onSwipe(direction, dog, e)}
                              className="swipe" 
                            >
                                <img id="swipeimg" className="hidden" src="yes.png" alt="yes"></img>
                                <img id="swipeimgn" className="hidden" src="nope.png" alt="no"></img>
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
            <Buttons dog={dog} dogs={dogs} user={user} setDogs={setDogs} comments={comments} setComments={setComments} ></Buttons>
        </div>
                        </TinderCard>
                        
                    </div>
                ))}
                </div>
             <Footer user={user}></Footer> 
        </div>
    )


}

export default DogContainer
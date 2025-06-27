import React from "react";
import "./Buttons.css";
import ChatForm from "./ChatForm"
// import ReplayIcon from '@mui/icons-material/Replay';
import { useState } from "react";

 function Buttons({ dog, user, dogs, setDogs}) {

    const [toggle, setToggle] = useState(false)

    function handleChat() {
        setToggle(!toggle)

    }
    

        
    
    function handleDelete(e) {

          fetch(`/dogs/${dog.id}`, {
             method: "DELETE",
           
          })
          let newdogs = dogs.filter((doggy) => doggy.id !== dog.id)
          setDogs(newdogs)
        }


    function handleLike(e) {
        let id = user.id
        fetch(`/likes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify({user_id: id, dog_id: dog.id})
        })
        // .then((response) => response.json())
        // .then((json) => {
        //      console.log(json)
        // })
        }

    return (
        <div id="buttons">
               {/* <ReplayIcon  />    */}
           
            {/* <button id="one">back</button> */}
            {/* <button onClick={handleDelete} id="one">delete</button> */}
            <img src="back.png" alt="back" id="btnimg"></img>
            <img onClick={handleChat} src="chatnew.png" alt="back" id="btnimg"></img>
            <img onClick={handleDelete} src="delete.png" alt="back" id="btnimg"></img>
            <img onClick={handleLike} src="likeicon.png" alt="back" id="btnimg"></img>
            {/* <button id="one" onClick={handleLike}>like</button> */}
            {/* <button id="one">comment</button> */}
            { toggle ? <ChatForm dog={dog} user={user} /> : null}
        </div>
    )
}

export default Buttons
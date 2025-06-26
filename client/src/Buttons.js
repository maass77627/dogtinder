import React from "react";
import "./Buttons.css";
// import ReplayIcon from '@mui/icons-material/Replay';


 function Buttons({ dog, user, dogs, setDogs}) {
    // console.log(dog)
    // console.log(user)

        
    
    function handleDelete(e) {
        // console.log(dog)
        // console.log(user)
            // console.log(e.target)
            // console.log(e.target.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[0].childNodes[1].innerText)
            // let name = e.target.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[0].childNodes[1].innerText
            // let doggy = dogs.find((dogg) => dogg.id === dog.id)
            // let id = doggy.id

          fetch(`/dogs/${dog.id}`, {
             method: "DELETE",
           
          })
          let newdogs = dogs.filter((doggy) => doggy.id !== dog.id)
          setDogs(newdogs)
        }


    function handleLike(e) {
        // console.log(dog)
        // console.log(user)
        // console.log(e.target.parentNode.parentNode)
        // console.log(e.target.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[0].childNodes[1].innerText)
         let id = user.id
        //  let name = e.target.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[0].childNodes[1].innerText
         // console.log(name)
        //  console.log(dog)
        //  let doggy = dogs.find((dogg) => dogg.id === dog.id)
        //  let idtwo = doggy.id
         
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
            <img src="chatnew.png" alt="back" id="btnimg"></img>
            <img onClick={handleDelete} src="delete.png" alt="back" id="btnimg"></img>
            <img onClick={handleLike} src="likeicon.png" alt="back" id="btnimg"></img>
            {/* <button id="one" onClick={handleLike}>like</button> */}
            {/* <button id="one">comment</button> */}
        </div>
    )
}

export default Buttons
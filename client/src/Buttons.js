import React from "react";
import "./Buttons.css";
//  import ReplayIcon from '@mui/icons-material/Replay';


 function Buttons({ dog, user, dogs, setDogs}) {
   

        
    
    function handleDelete(e) {
            console.log(e.target)
            console.log(e.target.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[0].childNodes[1].innerText)
            let name = e.target.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[0].childNodes[1].innerText
            let doggy = dogs.find((dog) => dog.name === name)
            let id = doggy.id

          fetch(`/dogs/${id}`, {
             method: "DELETE",
           
          })
          let newdogs = dogs.filter((dog) => dog.id !== doggy.id)
          setDogs(newdogs)
        }


    function handleLike(e) {
        console.log(user)
        console.log(e.target.parentNode.parentNode)
        // console.log(e.target.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[0].childNodes[1].innerText)
         let id = user.id
         let name = e.target.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[0].childNodes[1].innerText
         // console.log(name)
         console.log(dog)
         let doggy = dogs.find((dog) => dog.name === name)
         let idtwo = doggy.id
         
        fetch(`/likes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify({user_id: id, dog_id: idtwo})
        })
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
        })
        }

    return (
        <div id="buttons">
             {/* <ReplayIcon />  */}
           
            <button id="one">back</button>
            <button onClick={handleDelete} id="one">delete</button>
            {/* <button id="one">superlike</button> */}
            <button id="one" onClick={handleLike}>like</button>
            <button id="one">comment</button>
        </div>
    )
}

export default Buttons
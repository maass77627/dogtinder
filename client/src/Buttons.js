// import React from "react";
// import "./Buttons.css";
// import ChatForm from "./ChatForm"
// import { useState } from "react";

//  function Buttons({ dog, user, dogs, setDogs, comments, setComments}) {

//     const [toggle, setToggle] = useState(false)

//         function handleChat() {
//              setToggle(!toggle)
//             }
    

//         function handleDelete() {
//                 fetch(`/dogs/${dog.id}`, {
//                 method: "DELETE",
//            })
//              let newdogs = dogs.filter((doggy) => doggy.id !== dog.id)
//             setDogs(newdogs)
//             console.log(newdogs)
//         }


//     function handleLike(e) {
//         let id = user.id
//         fetch(`/likes`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             }, 
//             body: JSON.stringify({user_id: id, dog_id: dog.id})
//         })
//         }

//     return (
//         <div id="buttons">
//              <img src="back.png" alt="back" id="btnimg"></img>
//             <img onClick={handleChat} src="chatnew.png" alt="back" id="btnimg"></img>
//             <img onClick={handleDelete} src="delete.png" alt="back" id="btnimg"></img>
//             <img onClick={handleLike} src="likeicon.png" alt="back" id="btnimg"></img>
//              { toggle ? <ChatForm comments={comments} setComments={setComments} dog={dog} user={user} /> : null}
//         </div>
//     )
// }

// export default Buttons
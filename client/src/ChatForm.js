// import { StepContext } from "@mui/material";
import React from "react";
// import { json } from "react-router-dom";
import { useState } from "react";

function ChatForm({ user, dog }) {
const [context, setContext] = useState("")
    

    
    function handleSubmit(e) {
        let id = user.id
        let idtwo = dog.id
        console.log(id)
        console.log(idtwo)
        e.preventDefault()
        console.log(e)
        fetch("/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({context: context, user_id: id, dog_id: idtwo })
        })
         .then((response) => response.json())
         .then((json) => console.log(json))

    }


    return (
        <form id="chatform" onSubmit={handleSubmit}>
            
            <input type="text" value={context} onChange={(e) => setContext(e.target.value)}></input>
            
            <input type="submit" value="submit"></input>

        </form>
    )
}

export default ChatForm
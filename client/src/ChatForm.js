
import React from "react";
import { useState } from "react";

function ChatForm({ user, dog, comments, setComments }) {
            const [context, setContext] = useState("")
    

    
            function handleSubmit(e) {
                console.log(e.target)
                    let id = user.id
                    let idtwo = dog.id
                e.preventDefault()
            fetch("/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({context: context, user_id: id, dog_id: idtwo})
        })
         .then((response) => response.json())
         .then((json) => {
            let updatedcoms = [...comments, json]
            setComments(updatedcoms)
            console.log(json)})
        }


    return (
        <form id="chatform" onSubmit={handleSubmit}>
            <input type="text" value={context} onChange={(e) => setContext(e.target.value)}></input>
             <input type="submit" value="submit"></input>
        </form>
    )
}

export default ChatForm
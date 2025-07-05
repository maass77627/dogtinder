import React from "react";
import { useState } from "react";
import "./Chats.css"


function ReplyForm({user, comment, setComments, comments}) {

    const [reply, setReply] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        console.log(comment)
        let idtwo = comment.dog.id
        console.log(e)
        fetch(`/comments/${comment.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({context: reply, user_id: user.id, dog_id: idtwo })
        })
        .then((response) => response.json())
        .then((json) => {
         comment.items.push(json)
        let updatedcoms = [...comments, json]
        setComments(updatedcoms)
        console.log(json)})
        console.log(comment)
        console.log(comment.id)
        console.log(comment.items)
    }


    return(

        <div id="replyform">
            <form onSubmit={handleSubmit}>
                <input type="text" value={reply} onChange={(e) => setReply(e.target.value)}></input>
                <input type="submit" value="Reply"></input>
             </form>
        </div>
    )
}

export default ReplyForm
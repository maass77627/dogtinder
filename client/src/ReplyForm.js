import React from "react";
import { useState } from "react";
import "./Chats.css"


function ReplyForm({user, comment, setComments, comments}) {
    console.log(comment.dog.id)
    console.log(comment)

    const [reply, setReply] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        console.log(comment)
        let id = comment.id
        let idtwo = comment.dog.id
        console.log(comment.dog)
        
         fetch("/comments", {
            // fetch(`/comments/${id}/reply`, {
            // fetch(`/comments/${id}/add_reply`, {
             method: "POST",
            // method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
              body: JSON.stringify( {context: reply, user_id: user.id, dog_id: idtwo, parent: id})
        })
        .then((response) => response.json())
        .then((json) => {
         comment.items.push(json)
         let updatedcoms = [...comments, json]
         setComments(updatedcoms)
        console.log(json)})
        
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
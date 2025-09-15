
import { useState } from "react";
import "./Chats.css"
import React from "react";

function ReplyForm({user, comment, setComments, comments, replies, setReplies}) {
    const [reply, setReply] = useState("")
    

    function handleSubmit(e) {
        e.preventDefault()
        let form = e.target
        form.className = "hidden"
        let id = comment.id
         
    
        fetch(`/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
             body: JSON.stringify({context: reply, user_id: user.id, parent: id})
        })
        .then((response) => response.json())
        .then((json) => {
             let updatedcoms = [...comments, json]
              setComments(updatedcoms)
           
        })
        
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
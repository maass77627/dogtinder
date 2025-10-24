
import { useState } from "react";
import "./Chats.css"
import React from "react";
function ReplyForm({user, comment, setComments, comments, replyAdd}) {
    const [reply, setReply] = useState("")
    console.log(user)
    
    console.log(comment.user_id)
    

    function handleSubmit(e) {
        e.preventDefault()
        let form = e.target
        form.className = "hidden"
        let id = comment.id
        console.log(id)
        console.log(user)
         
    
        fetch(`/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
             body: JSON.stringify({context: reply, user_id: user.id, parent_id: id, user: user})
        })
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            console.log(comments)
            replyAdd(id, json)
           
        })
        setReply("")
    }

    return(

        <div className="replyform">
            <form onSubmit={handleSubmit}>
                <input type="text" value={reply} onChange={(e) => setReply(e.target.value)}></input>
                <input className="submit" type="submit" value="Reply"></input>
             </form>
        </div>
    )
}

export default ReplyForm
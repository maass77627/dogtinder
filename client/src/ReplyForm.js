
import { useState } from "react";
import "./Chats.css"
import React from "react";

function ReplyForm({user, comment, setComments, comments}) {

    const [reply, setReply] = useState("")
    

    function handleSubmit(e) {
        e.preventDefault()
       // console.log(e.target)
        let form = e.target
        form.className = "hidden"
        let id = comment.id
    console.log(comment.dog)
    //    let idtwo = comment.dog.id
        console.log(reply)

        fetch(`/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            //   body: JSON.stringify({context: reply, user_id: user.id, dog_id: idtwo, parent: id})
            body: JSON.stringify({context: reply, user_id: user.id, parent: id})
        })
        .then((response) => response.json())
        .then((json) => {
            console.log(json)

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
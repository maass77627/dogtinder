
import React from "react";
import { useState } from "react";


function ReplyForm({user, comment, setComments, comments}) {

    const [reply, setReply] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        let idtwo = comment.dog.id
        console.log(e)
        fetch("/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({context: reply, user_id: user.id, dog_id: idtwo })
        })
        .then((response) => response.json())
        .then((json) => {
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
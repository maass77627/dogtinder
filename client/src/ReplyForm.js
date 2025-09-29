
import { useState } from "react";
import "./Chats.css"
import React from "react";
function ReplyForm({user, comment, setComments, comments, replyAdd}) {
    const [reply, setReply] = useState("")
    console.log(user)
    // console.log(user.id)
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
            
           replyAdd(id, reply)
            //  let newcomments = [...comments, json]

    //         setComments((prevComments) =>
    //   prevComments.map((com) =>
    //     com.id === comment.id
    //       ? {
    //           ...comment,
    //           replies: [...comment.replies, json],
    //         }
    //       : com
    //   )
    // );
              
            // setComments((prevComments) => [...prevComments, json])
            
           
        })
        setReply("")
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
import React from "react";
// import ReplyForm from "./ReplyForm";
import "./Chats.css"

function Chat({comment, user}) {
    console.log(user)
    console.log(comment)
    console.log(comment.user.username)
    return(
        <div id="chat">
             <h1>{comment.user.username}</h1>  
            <p>{comment ? comment.context : null}</p> 
            {/* <ReplyForm></ReplyForm> */}
        </div>
    )
}

export default Chat
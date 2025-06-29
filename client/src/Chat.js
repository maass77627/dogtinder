import React from "react";

function Chat({comment, user}) {
    console.log(user)
    console.log("heyyyyyyy right herrre")
    console.log(comment)
    console.log(comment.user.username)
    return(
        <div id="chat">
            <h1>{comment.user.username}</h1> 
            <p>{comment.context}</p> :
        </div>
    )
}

export default Chat
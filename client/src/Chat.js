import React from "react";

function Chat({comment, user}) {
    console.log(user)

    return(
        <div id="chat">
            <h1>{comment.user.username}</h1>
            <p>{comment.context}</p>

        </div>
    )
}

export default Chat
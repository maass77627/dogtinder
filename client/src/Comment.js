import React from "react";
import ReplyForm from "./ReplyForm";
import "./Chats.css"



function Comment({ comment, user }) {


    return(
        <div id="comment">
            <h1>{ comment.user.username}</h1>
            <p>{comment.context}</p>
            <ReplyForm comment={comment} user={user}></ReplyForm>
        </div>
    )
}

export default Comment
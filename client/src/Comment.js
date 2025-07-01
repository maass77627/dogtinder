import React from "react";
import ReplyForm from "./ReplyForm";
import "./Comment.css"



function Comment({ comment, user, setComments, comments }) {


    return(
        <div id="comment">
            <h1>{ comment.user.username}</h1>
            <p>{comment.context}</p>
            <ReplyForm comments={comments} setComments={setComments} comment={comment} user={user}></ReplyForm>
        </div>
    )
}

export default Comment
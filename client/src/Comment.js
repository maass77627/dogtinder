import React from "react";
import ReplyForm from "./ReplyForm";
import "./Comment.css"
import { useState } from "react";


function Comment({ comment, user, setComments, comments }) {

    const [ toggle, setToggle ] = useState(false)

            function handleClick() {
                setToggle(!toggle)
            }
    return(
        <div id="comment">
            <h1>{ comment.user.username}</h1>
            <p>{comment.context}</p>
            <button onClick={handleClick}>reply</button> <button>edit</button> <button>delete</button>
            { toggle ? <ReplyForm comments={comments} setComments={setComments} comment={comment} user={user}></ReplyForm> : null}
            
        </div>
    )
}

export default Comment
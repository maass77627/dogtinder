import React from "react";
import ReplyForm from "./ReplyForm";
import "./Chats.css"
import { useState } from "react";

function Chat({comment, user, setComments, comments}) {
    console.log(comment)
    console.log(comment.user)
    console.log(comment.user.username)

    const [toggle, setToggle] = useState(false)

    function handleClick() {
        setToggle(!toggle)
    }
        // comment.parent ? 

    return(
        <div id="chat">
            <img id="userchatimage" src="forest.png" alt="profile"></img>
             <h1 id="userchatname">{comment.user.username}</h1>  
            <p id="userchatcontext">{comment ? comment.context : null}</p> 
            <button onClick={handleClick}>reply</button> <button>edit</button> <button>delete</button>
            {toggle ? <ReplyForm comments={comments} setComments={setComments} user={user} comment={comment} ></ReplyForm> : null}
        </div>
    )
}

export default Chat
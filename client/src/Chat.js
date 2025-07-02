import React from "react";
import ReplyForm from "./ReplyForm";
import "./Chats.css"
import { useState } from "react";

function Chat({comment, user}) {
    console.log(user)
    console.log(comment)
    console.log(comment.items)
    console.log(comment.user.username)
    const [toggle, setToggle] = useState(false)

    function handleClick() {
        setToggle(!toggle)
    }
    
    return(
        <div id="chat">
            <img id="userchatimage" src="forest.png" alt="profile"></img>
             <h1>{comment.user.username}</h1>  
            <p>{comment ? comment.context : null}</p> 

            <button onClick={handleClick}>reply</button> <button>edit</button> <button>delete</button>
            {toggle ? <ReplyForm comment={comment} ></ReplyForm> : null}
        </div>
    )
}

export default Chat
import React from "react";
import { NavLink } from "react-router-dom";
import "./Chats.css"
import Chat from "./Chat";


function Chats({ comments, user, setComments }) {
    console.log(comments)
    console.log(user.id)

    
    return(
        <div id="chats">
            <NavLink id="links" to="/">Home Page</NavLink>
            <h1>Chat Page</h1>
            {user && comments ? comments.map((comment) => <Chat comments={comments} setComments={setComments} key={comment.id} user={user} comment={comment}></Chat>) : null} 
        </div>
    )
}

export default Chats
import React from "react";
import { NavLink } from "react-router-dom";
import "./Chats.css"
import Chat from "./Chat";

function Chats({ comments, user }) {
    console.log(comments)

    let newcomments = comments.filter((commenty) => commenty.user_id = user.id)

    return(
        <div id="chats">
            <NavLink id="links" to="/">Home Page</NavLink>
            <h1>Chat Page</h1>
               {user ? newcomments.map((comment) => <Chat user={user} comment={comment}></Chat>) : null} 
        </div>
    )
}

export default Chats
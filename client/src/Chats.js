import React from "react";
import { NavLink } from "react-router-dom";
import "./Chats.css"
import Chat from "./Chat";

function Chats({ comments }) {
    console.log(comments)

    return(
        <div id="chats">
            <NavLink id="links" to="/">Home Page</NavLink>
            <h1>Chat Page</h1>
                <Chat></Chat>
        </div>
    )
}

export default Chats
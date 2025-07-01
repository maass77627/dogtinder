import React from "react";
import { NavLink } from "react-router-dom";
import "./Chats.css"
import Chat from "./Chat";


function Chats({ comments, user, setComments }) {
    console.log(comments)
    console.log(user.id)

    let newcomments = comments.filter((commenty) => commenty.user_id = user.id)
    console.log(newcomments)

    return(
        <div id="chats">
            <NavLink id="links" to="/">Home Page</NavLink>
            <h1>Chat Page</h1>
                {user && newcomments ? newcomments.map((comment) => <Chat setComments={setComments} key={comment.id} user={user} comment={comment}></Chat>) : null} 
              
        </div>
    )
}

export default Chats


import React from "react";
import { NavLink } from "react-router-dom";
import "./Chats.css";
import Chat from "./Chat";

function Chats({ comments, user, setComments, replyAdd, users }) {
  return (
    <div className="chats-container">
      <NavLink className="chats-link" to="/">Home Page</NavLink>
      <h1 className="chats-title">Chat Page</h1>

      {user && comments
        ? comments.map((comment) => (
            <Chat
              key={comment.id}
              users={users}
              replyAdd={replyAdd}
              comments={comments}
              setComments={setComments}
              user={user}
              comment={comment}
            />
          ))
        : null}
    </div>
  );
}

export default Chats;
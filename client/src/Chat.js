

import React, { useState } from "react";
import ReplyForm from "./ReplyForm";
import "./Chats.css";

function Chat({ users, comment, user, setComments, comments, replyAdd }) {
  const [toggle, setToggle] = useState(false);
  const commentId = comment.id;
  console.log(comment)

  function handleClick() {
    setToggle(!toggle);
  }

  function handleDelete(id) {
    fetch(`/comments/${id}`, { method: "DELETE" })
      .then(() => {
        setComments((prevComments) =>
          removeCommentFromState(prevComments, commentId)
        );
      });
  }

  function removeCommentFromState(comments, commentId) {
    return comments
      .filter((comment) => comment.id !== commentId)
      .map((comment) => ({
        ...comment,
        replies: comment.replies
          ? removeCommentFromState(comment.replies, commentId)
          : [],
      }));
  }

  return (
    <div className="chat">
      <img className="userchatimage" src="forest.png" alt="profile" />
      <h4 className="userchatname">
        {comment.user ? comment.user.name : null}
      </h4>

      {comment.context ? (
        <p className="userchatcontext">{comment.context}</p>
      ) : null}

      {comment.user_id && comment.user_id !== user.id ? (
        <button className="buttonsreply" onClick={handleClick}>Reply</button>
      ) : null}

      {comment.user_id === user.id ? (
        <div className="buttonstwo">
          
          <button onClick={() => handleDelete(comment.id)}>Delete</button>
        </div>
      ) : null}

      {toggle ? (
        <ReplyForm
          replyAdd={replyAdd}
          comments={comments}
          setComments={setComments}
          user={user}
          comment={comment}
        />
      ) : null}

      {comment.replies &&
        comment.replies.map((reply) => (
          <div className="reply" key={reply.id}>
            <Chat
              comments={comments}
              setComments={setComments}
              comment={reply}
              user={user}
              replyAdd={replyAdd}
            />
          </div>
        ))}
    </div>
  );
}

export default Chat;




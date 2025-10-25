
import React, { useState } from "react";
import ReplyForm from "./ReplyForm";
import "./Chats.css";

function Chat({ users, comment, user, setComments, comments, replyAdd }) {
  const [toggle, setToggle] = useState(false);
  const commentId = comment.id;

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


  const isUser = comment.user_id === user.id;

  return (
    <div className={`chat-bubble ${isUser ? "user" : "other"}`}>
      <div className="chat-header">
        <img className="userchatimage" src="forest.png" alt="profile" />
        <h4 className="userchatname">
          {comment.user ? comment.user.name : "Unknown"}
        </h4>
      </div>

      {comment.context && (
        <p className="userchatcontext">{comment.context}</p>
      )}

      <div className="chat-buttons">
        {!isUser && (
          <button className="reply-btn" onClick={handleClick}>
            Reply
          </button>
        )}
        {isUser && (
          <button className="delete-btn" onClick={() => handleDelete(comment.id)}>
            Delete
          </button>
        )}
      </div>

      {toggle && (
        <ReplyForm
          replyAdd={replyAdd}
          comments={comments}
          setComments={setComments}
          user={user}
          comment={comment}
        />
      )}

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
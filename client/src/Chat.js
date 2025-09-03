import React from "react";
import ReplyForm from "./ReplyForm";
import "./Chats.css"
import { useState } from "react";

function Chat({comment, user, setComments, comments}) {
     console.log(comments)
    console.log(comment)

    const [toggle, setToggle] = useState(false)

    function handleClick() {
        setToggle(!toggle)
    }

    function handleDelete(id) {
        console.log(id)
        console.log(comments)
        
        fetch(`/comments/${id}`, {
            method: "DELETE"
        })
          console.log(comments)

          let newcomments = comments.filter((com) => com.id !== id)
          setComments(newcomments)
        
    }
        
       
    return(
        <div id={comment.id} className="chat">
            <img id="userchatimage" src="forest.png" alt="profile"></img>
            { comment.user ? <h1 id="userchatname">{comment.user.username}</h1> : null }
            <p id="userchatcontext">{comment ? comment.context : null}</p> 
            { comment.user_id !== user.id ? <button onClick={handleClick}>reply</button> : null }
            { comment.user_id === user.id ?  <div><button>edit</button> <button onClick={ () => handleDelete(comment.id)}>delete</button></div> : null }
            {toggle ? <ReplyForm comments={comments} setComments={setComments} user={user} comment={comment} ></ReplyForm> : null}<br></br>
            {comments.map((com) => com.parent === comment.id ? <div id="reply" > <Chat comments={comments} setComments={setComments} key={com.id} user={user} comment={com}></Chat> </div> : null )}
        </div>
    )
}

export default Chat
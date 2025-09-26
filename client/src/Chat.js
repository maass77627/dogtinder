import React from "react";
import ReplyForm from "./ReplyForm";
import "./Chats.css"
import { useState } from "react";
// import ChatForm from "./ChatForm";

function Chat({comment, user, setComments, comments}) {
    console.log(comment)
    console.log(comment.replies)
    console.log(comment.user_id)
    // console.log(user.id)
    console.log(comments)
    console.log(comment.parent_id)
    console.log(user)

    const [toggle, setToggle] = useState(false)
    

    function handleClick() {
        setToggle(!toggle)
    }

    function handleDelete(id) {
        fetch(`/comments/${id}`, {
            method: "DELETE"
        })
          let newcomments = comments.filter((com) => com.id !== id)
          setComments(newcomments)
        }
       



    return(
        
         <div  className="chat">

        <img id="userchatimage" src="forest.png" alt="profile"></img>
         {/* {comment.user ? <h1 id="userchatname">{comment.user.username}</h1> : null } */}
         { comment.context ? <p id="userchatcontext">{comment.context}</p> : null } 
        {/* { comment.user_id && comment.user_id !== user.id ? <button onClick={handleClick}>reply</button> : null }   */}
        <button onClick={handleClick}>reply</button>
        <div><button>edit</button> <button onClick={ () => handleDelete(comment.id)}>delete</button></div>
        {/* { comment.user_id === user.id ?  <div><button>edit</button> <button onClick={ () => handleDelete(comment.id)}>delete</button></div> : null }  */}
         {toggle ? <ReplyForm  comments={comments} setComments={setComments} user={user} comment={comment} ></ReplyForm> : null}<br></br>

         {comment.replies && comment.replies.map((reply) => (
       <div id="reply"> <Chat key={reply.id} comments={comments} setComments={setComments} comment={reply} user={user} /> </div>
      ))}



        
      </div>
    
      
       
     )
}

export default Chat





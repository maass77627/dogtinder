import React from "react";
import ReplyForm from "./ReplyForm";
import "./Chats.css"
import { useState } from "react";

function Chat({comment, user, setComments, comments}) {
    console.log(comment)
    console.log(comment.replies)

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
        //   let newreplies = replies.filter((rep) => rep.id !== id)
        //   setReplies(newreplies)
        }
       
    return(
       
        <div id={comment.id} className="chat">
            <img id="userchatimage" src="forest.png" alt="profile"></img>
            <h1 id="userchatname">{comment.user.username}</h1> 
            <p id="userchatcontext">{comment ? comment.context : null}</p>
            { comment.user_id !== user.id ? <button onClick={handleClick}>reply</button> : null } 
            { comment.user_id === user.id ?  <div><button>edit</button> <button onClick={ () => handleDelete(comment.id)}>delete</button></div> : null } 
            {toggle ? <ReplyForm  comments={comments} setComments={setComments} user={user} comment={comment} ></ReplyForm> : null}<br></br>

           {comment.replies && comment.replies > 0 ? comment.replies.map((reply) => <div id="reply"> <Chat  key={reply.id} comment={reply}></Chat></div>) : null}
         
            {/* {comments.map((com) => com.parent === comment.id ? <div id="reply" > <Chat comments={comments} setComments={setComments} key={com.id} user={user} comment={com}></Chat> </div> : null )}  */}
        
        </div>
       
     )
}

export default Chat


// {comment.replies && comment.replies.length > 0 && (
//       <div>
//         {comment.replies.map((reply) => (
//           <Comment key={reply.id} comment={reply} />
//         ))}



import React from "react";
import ReplyForm from "./ReplyForm";
import "./Chats.css"
import { useState } from "react";
// import ChatForm from "./ChatForm";

function Chat({comment, user, setComments, comments, replyAdd}) {
    console.log(comment)
    console.log(comment.replies)
    console.log(comment.user_id)
    // console.log(user.id)
    console.log(comments)
    console.log(comment.parent_id)
    console.log(user)
    let commentId = comment.id

    const [toggle, setToggle] = useState(false)
    

    function handleClick() {
        setToggle(!toggle)
    }

    function handleDelete(id) {
        fetch(`/comments/${id}`, {
            method: "DELETE"
        })
        .then(() => {
          setComments(prevComments => removeCommentFromState(prevComments, commentId));
        });

       

        //   let newcomments = comments.filter((com) => com.id !== id)
        //   setComments(newcomments)
         }


        
          function removeCommentFromState(comments, commentId) {


        //  const removeCommentFromState = (comments, commentId) => {
          console.log(comments)
          console.log(commentId)
           if (comments > 0) {
          return comments.filter(comment => comment.id !== commentId)
            .map(comment => ({
              ...comment,
              replies: removeCommentFromState(comment.replies, commentId),
            }));
          } else {
            return comments

          }
          
         
        };
        
        // const handleDelete = (commentId) => {
        //   deleteComment(commentId).then(() => {
        //     setComments(prevComments => removeCommentFromState(prevComments, commentId));
        //   });
        // };
        
       

        



    return(
        
         <div  className="chat">

        <img id="userchatimage" src="forest.png" alt="profile"></img>
          {comment.user ? <h1 id="userchatname">{comment.user.username}</h1> : null } 
         { comment.context ? <p id="userchatcontext">{comment.context}</p> : null } 
         { comment.user_id && comment.user_id !== user.id ? <button onClick={handleClick}>reply</button> : null }   
        {/* <button id="buttonstwo" onClick={handleClick}>reply</button> */}
        {/* <div><button id="buttonstwo">edit</button> <button id="buttonstwo" onClick={ () => handleDelete(comment.id)}>delete</button></div> */}
         { comment.user_id === user.id ?  <div><button>edit</button> <button onClick={ () => handleDelete(comment.id)}>delete</button></div> : null }  
         {toggle ? <ReplyForm  replyAdd={replyAdd} comments={comments} setComments={setComments} user={user} comment={comment} ></ReplyForm> : null}<br></br>

         {comment.replies && comment.replies.map((reply) => (
       <div id="reply"> <Chat key={reply.id} comments={comments} setComments={setComments} comment={reply} user={user} replyAdd={replyAdd} /> </div>
      ))}



        
      </div>
    
      
       
     )
}

export default Chat





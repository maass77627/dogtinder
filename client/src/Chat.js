import React from "react";
import ReplyForm from "./ReplyForm";
import "./Chats.css"
import { useState } from "react";


function Chat({users, comment, user, setComments, comments, replyAdd}) {
  console.log(users)
   
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

         }


        
          
         function removeCommentFromState(comments, commentId) {

          return comments.filter(comment => comment.id !== commentId)
            .map(comment => ({
              ...comment,
              replies: comment.replies ? removeCommentFromState(comment.replies, commentId) : [],
            }));
          
         };
        
        
       



    return(
        <div  className="chat">
          <img id="userchatimage" src="forest.png" alt="profile"></img>
          <h4 id="userchatname">{ comment.user ? comment.user.name : null}</h4> 
          { comment.context ? <p id="userchatcontext">{comment.context}</p> : null } 
          { comment.user_id && comment.user_id !== user.id ? <button onClick={handleClick}>reply</button> : null }   
          { comment.user_id === user.id ?  <div><button>edit</button> <button onClick={ () => handleDelete(comment.id)}>delete</button></div> : null }  
          {toggle ? <ReplyForm  replyAdd={replyAdd} comments={comments} setComments={setComments} user={user} comment={comment} ></ReplyForm> : null}<br></br>
          {comment.replies && comment.replies.map((reply) => (
         <div id="reply"> <Chat key={reply.id} comments={comments} setComments={setComments} comment={reply} user={user} replyAdd={replyAdd} /> </div>
      ))}
       </div>
    
      
       )
}

export default Chat





// import React, { useState } from "react";
// import ReplyForm from "./ReplyForm";
// import "./Chats.css";

// function Chat({ users, comment, user, setComments, comments, replyAdd }) {
//   const [toggle, setToggle] = useState(false);

//   const handleClick = () => setToggle(!toggle);

//   const handleDelete = (id) => {
//     fetch(`/comments/${id}`, { method: "DELETE" })
//       .then(() => {
//         setComments(prevComments => removeCommentFromState(prevComments, comment.id));
//       });
//   };

//   const removeCommentFromState = (comments, commentId) => {
//     return comments
//       .filter(comment => comment.id !== commentId)
//       .map(comment => ({
//         ...comment,
//         replies: comment.replies ? removeCommentFromState(comment.replies, commentId) : [],
//       }));
//   };

//   // Determine if this is a message from the current user
//   const isUserMessage = comment.user_id === user.id;

//   return (
//     <div className={`chat ${isUserMessage ? "user-message" : ""}`}>
//       <img id="userchatimage" src="forest.png" alt="profile" />
//       <h4 id="userchatname">{comment.user ? comment.user.name : null}</h4>
//       {comment.context && <p id="userchatcontext">{comment.context}</p>}

//       {/* Reply / Edit / Delete buttons */}
//       {comment.user_id && comment.user_id !== user.id && (
//         <button className="reply-button" onClick={handleClick}>Reply</button>
//       )}
//       {isUserMessage && (
//         <div id="buttonstwo">
//           <button>Edit</button>
//           <button onClick={() => handleDelete(comment.id)}>Delete</button>
//         </div>
//       )}

//       {/* Reply form */}
//       {toggle && (
//         <div id="replyform">
//           <ReplyForm
//             replyAdd={replyAdd}
//             comments={comments}
//             setComments={setComments}
//             user={user}
//             comment={comment}
//           />
//         </div>
//       )}

//       {/* Nested replies */}
//       {comment.replies &&
//         comment.replies.map((reply) => (
//           <div id="reply" key={reply.id}>
//             <Chat
//               comments={comments}
//               setComments={setComments}
//               comment={reply}
//               user={user}
//               replyAdd={replyAdd}
//             />
//           </div>
//         ))}
//     </div>
//   );
// }

// export default Chat;



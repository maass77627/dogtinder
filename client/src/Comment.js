import React from "react";
import ReplyForm from "./ReplyForm";
import "./Comment.css"
import { useState } from "react";


function Comment({ comment, user, setComments, comments }) {

    const [ toggle, setToggle ] = useState(false)

        function handleDelete(e) {
            console.log("hi")
            console.log(e.target)
            console.log(comment)
            let id = comment.id
            
            fetch(`/comments/${id}`, {
                method: "DELETE",
            })

            let newComments = comments.filter((com) => com.id !== comment.id)
            setComments(newComments)
            console.log(newComments)
        }

               
        function handleClick() {
                setToggle(!toggle)
            }
    
    
            return(
        <div id="comment">
            <img id="userchatimage" src="forest.png" alt="profile"></img>
            <h1>{ comment.user.username}</h1>
            <p>{comment.context}</p>
            <button onClick={handleClick}>reply</button> <button>edit</button> <button onClick={handleDelete}>delete</button>
            { toggle ? <ReplyForm comments={comments} setComments={setComments} comment={comment} user={user}></ReplyForm> : null}
        </div>
    )
}

export default Comment
import React, { useEffect } from "react";
import ReplyForm from "./ReplyForm";
import "./Comment.css"
import { useState } from "react";
// import Comment from "./Comment";


function Comment({ comment, user, setComments, comments, item }) {
    const [fixedComment, setfixedComment] = useState({context: "", dog: {}, dog_id: 5, id: 3, items: [], parent: 9, user: {}, user_id: 4 })
    const [ toggle, setToggle ] = useState(false)
console.log(comment.parent)
    useEffect(() => {
        function handleComments() {
            if (typeof comment.parent !== "undefined" && comment.parent !== null && typeof comment.items !== "undefined" && comment.items !== null) {
              let parent = comments.find((com) => com.id === comment.parent)
              console.log(parent)
               parent.items.push(comment)
               console.log(parent.items)
              setfixedComment(parent)
            
           } else {
               setfixedComment(comment)
               
           }
          }
         handleComments()
    }, [comment, comments])
    

        function handleDelete(e) {
            let id = comment.id
            fetch(`/comments/${id}`, {
                method: "DELETE",
            })
            let newComments = comments.filter((com) => com.id !== comment.id)
            setComments(newComments)
            }

               
        function handleClick() {
                setToggle(!toggle)
            }

    
            return(
                <div>
                    <div id="comment">
                    <img id="userchatimage" src="forest.png" alt="profile"></img>
                    <h1>{ fixedComment.user.username}</h1>
                    <p>{fixedComment.context}</p>
                     <button onClick={handleClick}>reply</button> <button>edit</button> <button onClick={handleDelete}>delete</button>
                </div>
                { toggle ? <ReplyForm comments={comments} setComments={setComments} comment={comment} user={user}></ReplyForm> : null}
                {fixedComment.items ?  fixedComment.items.map((item) => <Comment key={item.id}  item={item}></Comment>) : null}
                </div>
    )
}

export default Comment
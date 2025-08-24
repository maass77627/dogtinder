import React from "react";
import ReplyForm from "./ReplyForm";
import "./Chats.css"
import { useState } from "react";

function Chat({comment, user, setComments, comments}) {
    console.log(comments)
    // console.log(comment)
    // console.log(comment.user)
    // console.log(comment.user.username)
    // console.log(comment.parent)
    // console.log(comment.items)

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

          let newarray = []
        let newcomments = comments.filter((com) => com.id !== id)
        for (let i = 0; i < newcomments.length; i++) {
            let comm = newcomments[i]
            for (let x = 0; x < comm.items.length; x++) {
                let item = comm.items[x]
                if (item.id !== id) {
                    newarray.push(item)
                }
            }
        }
       console.log(newarray)
         setComments(newarray)
        
    }
        
          

    return(
        <div id={comment.id} className="chat">
            <img id="userchatimage" src="forest.png" alt="profile"></img>
            <h1 id="userchatname">{comment.user.username}</h1>  
            <p id="userchatcontext">{comment ? comment.context : null}</p> 
             {/* {comment.items ? comment.items.map((comment) => <Chat comments={comments} setComments={setComments} key={comment.id} user={user} comment={comment}></Chat>) : null}   */}
           { comment.user_id !== user.id ? <button onClick={handleClick}>reply</button> : null }
           { comment.user_id === user.id ?  <div><button>edit</button> <button onClick={ () => handleDelete(comment.id)}>delete</button></div> : null }
            {toggle ? <ReplyForm comments={comments} setComments={setComments} user={user} comment={comment} ></ReplyForm> : null}<br></br>
             {comment.items ? comment.items.map((comment) => <div id="reply" className="chat"> <Chat comments={comments} setComments={setComments} key={comment.id} user={user} comment={comment}></Chat> </div>) : null  }
            
        </div>
    )
}

export default Chat
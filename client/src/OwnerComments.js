
import React from "react";
import Comment from "./Comment";
import { NavLink } from "react-router-dom";

function OwnerComments({comments, user, setComments}) {
    console.log(comments)



     let ownercomments = comments.filter((comment) => comment.dog.user_id === user.id)



    return(

        <div id="ownercomments">
             <NavLink id="links" to="/owners">Home Page</NavLink>
           
            {ownercomments ? ownercomments.map((comment) => <Comment comments={comments} setComments={setComments} key={comment.id} user={user} comment={comment}></Comment>) : null }
            

        </div>
    )
}

export default OwnerComments
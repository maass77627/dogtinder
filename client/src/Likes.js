import React from "react";
import LikePage from "./LikePage";
import { NavLink } from "react-router-dom";

 import './LikePage.css';

function Likes({likes, user}) {
    console.log(likes)
    console.log(user)
    
    
    let newlikes = likes.filter((like) => like.user_id === user.id);
    console.log(newlikes)
    



    return(
        <div id="likepagecont">
            <NavLink id="lin" to="/">Home Page</NavLink>
            <h1 id="match">Your Matches</h1>
             { user && newlikes ? newlikes.map((like) => <LikePage key={like.id} like={like}/>) : <h1>"You currently have no likes"</h1> }

        </div>
    )
}

export default Likes
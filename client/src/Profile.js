import React from "react";
import "./Profile.css"
import { NavLink } from "react-router-dom";


function Profile({user}) {



    return(
            <div id="profile">
                <NavLink id="links" to="/">Home Page</NavLink>
                <img id="profileimage" src="forest.png" alt="profile"></img> 
                 <h3 id="proname">{user.username}</h3>
           </div>
            )
}

export default Profile
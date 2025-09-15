import React from "react";
import "./Profile.css"
import { NavLink } from "react-router-dom";
import ProfileEditForm from "./ProfileEditForm";
import { useState } from "react";

function Profile({user}) {

    const [toggle, setToggle] = useState(false)

    function handleEdit() {
        setToggle(!toggle)

    }



    return(
            <div id="profile">
                <NavLink id="links" to="/">Home Page</NavLink>
                <img id="profileimage" src="forest.png" alt="profile"></img> 
                 <h3 id="proname">{user.username}</h3>
                 <h4>{user.name}</h4>
                 <h4>{user.role}</h4>
                  <h4>{user.bio}</h4> 
                 <button onClick={handleEdit}>Edit</button>
                 {toggle ? <ProfileEditForm></ProfileEditForm> : null}
           </div>
            )
}

export default Profile
import React from "react";
import "./Profile.css"


function Profile({user}) {



    return(
            <div id="profile">

                 <img id="profileimage" src="forest.png" alt="profile"></img> 
                 <h3 id="proname">{user.username}</h3>




            </div>



    )
}

export default Profile
import React from "react";
import "./Profile.css"


function ProfileEditForm() {

    return(
        <form id="editproform">
            <label>Bio: </label>
            <input  type="text"></input>
            <label>: </label>
            <input type="text"></input>
            <input type="text"></input>
            <input type="submit"></input>
        </form>
    )
}

export default ProfileEditForm


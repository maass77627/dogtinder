import React from "react";
import "./Profile.css"


function ProfileEditForm() {

    return(
        <form id="editproform">
            <label>Bio: </label>
            <input  type="text"></input><br></br>
            <label>Username: </label>
            <input type="text"></input><br></br>
            <label>Name: </label>
            <input type="text"></input><br></br>
            <label> </label>
            <input type="submit"></input><br></br>
        </form>
    )
}

export default ProfileEditForm


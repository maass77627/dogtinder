import React from "react";
import "./Profile.css"

import { useState } from "react";


function ProfileEditForm({user, setUsers, users}) {
    console.log(users)
    console.log(user)

    const [userData, setUserData] = useState({
        name: user.name,
        username: user.username,
        bio: user.bio,
        image: user.image,
    })

    function handleNameChange(e){
        setUserData({
            ...userData, 
            name: e.target.value
        })

    }

    function handleUsernameChange(e) {
        setUserData({
            ...userData, 
           username: e.target.value
        })

    }

    function handleBioChange(e) {
        setUserData({
            ...userData, 
           bio: e.target.value
        })

    }

    function handleImageChange(e) {
        setUserData({
            ...userData, 
           image: e.target.value
        })

    }

   



    function handleSubmit(e) {
        e.preventDefault()
        let id= user.id
        fetch(`/users/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            // body: JSON.stringify({name: name, age: age, interests: interests, details: details, image: image})
            body: JSON.stringify(userData)

        })
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
             let newusers = users.map((usergy) => usergy.id === id ? json : usergy)
             setUsers(newusers)
        })

    }


    return(
       

        <form id="editproform" onSubmit={handleSubmit}>
        <h3>Edit User</h3>
        <label>Name:</label>
         <input type="text" value={userData.name} placeholder={user.name} onChange={handleNameChange}></input><br></br>
         <label>Username:</label>
         <input type="text" value={userData.username} placeholder={user.username} onChange={handleUsernameChange}></input><br></br>
         <label>Bio:</label>
         <input type="text" value={userData.bio} placeholder={user.bio} onChange={handleBioChange}></input><br></br>
         <label>Image:</label>
          <input type="text" value={userData.image} placeholder={user.image} onChange={handleImageChange}></input><br></br>
          <input type="submit" value="submit"></input>
          </form>
    )
}

export default ProfileEditForm


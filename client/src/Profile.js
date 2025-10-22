// import React from "react";
// import "./Profile.css"
// import { NavLink } from "react-router-dom";
// import ProfileEditForm from "./ProfileEditForm";
// import { useState } from "react";

// function Profile({user, users, setUsers}) {

//     const [toggle, setToggle] = useState(false)

//     function handleEdit() {
//         setToggle(!toggle)

//     }



//     return(
    
             
             
//             <div id="profile">
//                 <img id="profileimage" src={user.image} alt="profile"></img> 
//                  <h3 id="proname">{user.username}</h3>
//                  <div id="proinfo">
//                 <h1>Your Profile</h1>

//                 <NavLink id="links" to="/">Home Page</NavLink>
//                 {/* <img id="profileimage" src={user.image} alt="profile"></img> 
//                  <h3 id="proname">{user.username}</h3> */}
//                  <h4>{user.name}</h4>
//                  <h4>{user.role}</h4>
//                   <h4>{user.bio}</h4> 
//                  <button onClick={handleEdit}>Edit</button>
//                  {toggle ? <ProfileEditForm user={user} users={users} setUsers={setUsers}></ProfileEditForm> : null}
//                  </div>
//            </div>
//             )
// }

// export default Profile

import React, { useState } from "react";
import "./Profile.css";
import { NavLink } from "react-router-dom";
import ProfileEditForm from "./ProfileEditForm";

function Profile({ user, users, setUsers }) {
  const [toggle, setToggle] = useState(false);

  const handleEdit = () => setToggle(!toggle);

  return (
    <div className="profile-page">
      {/* Profile Card */}
      <div className="profile-card">
        {/* Profile Image */}
        <img
          className="profile-avatar"
          src={user.image || "default-profile.png"}
          alt={user.username}
        />

        {/* Username */}
        <h2 className="profile-username">{user.username}</h2>

        {/* User Info */}
        <div className="profile-info">
          <h3>Your Profile</h3>
          <NavLink className="home-link" to="/">Home Page</NavLink>
          <h4>Name: {user.name}</h4>
          <h4>Role: {user.role}</h4>
          <h4>Bio: {user.bio || "No bio provided."}</h4>
        </div>

        {/* Edit Button */}
        <button className="edit-btn" onClick={handleEdit}>
          {toggle ? "Close Edit" : "Edit Profile"}
        </button>

        {/* Edit Form */}
        {toggle && (
          <div className="edit-form-container">
            <ProfileEditForm user={user} users={users} setUsers={setUsers} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
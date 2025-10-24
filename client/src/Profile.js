

import React, { useState } from "react";
import "./Profile.css";
import { NavLink } from "react-router-dom";
import ProfileEditForm from "./ProfileEditForm";

function Profile({ user, users, setUsers }) {
  const [toggle, setToggle] = useState(false);

  const handleEdit = () => setToggle(!toggle);

  return (
    <div className="profile-page">
      
      <div className="profile-card">
        
        <img
          className="profile-avatar"
          src={user.image || "default-profile.png"}
          alt={user.username}
        />

       
        <h2 className="profile-username">{user.username}</h2>

        
        <div className="profile-info">
          <h3>Your Profile</h3>
          <NavLink className="home-link" to="/">Home Page</NavLink>
          <h4>Name: {user.name}</h4>
          <h4>Role: {user.role}</h4>
          <h4>Bio: {user.bio || "No bio provided."}</h4>
        </div>

       
        <button className="edit-btn" onClick={handleEdit}>
          {toggle ? "Close Edit" : "Edit Profile"}
        </button>

        
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
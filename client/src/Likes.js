
import React from "react";
import LikePage from "./LikePage";
import { NavLink } from "react-router-dom";
import "./LikePage.css";

function Likes({ likes, user, setLikes, comments, setComments }) {
  if (!user) return null;

  
  const userLikes = likes.filter((like) => like.user_id === user.id);

  return (
    <div id="likepagecont">
      <NavLink id="lin" to="/">Home Page</NavLink>
      <h1 id="match">Your Matches</h1>

      {userLikes.length > 0 ? (
        <LikePage user={user} comments={comments}  setComments={setComments} likes={userLikes} setLikes={setLikes} />
      ) : (
        <h2 style={{ textAlign: "center", marginTop: "50px" }}>
          You currently have no likes.
        </h2>
      )}
    </div>
  );
}

export default Likes;
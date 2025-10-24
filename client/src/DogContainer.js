

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import Footer from "./Footer";


function DogContainer({ dogs, user, setDogs, comments, setComments, likes, setLikes }) {
  const [swipeDirection, setSwipeDirection] = useState("");

  function onSwipe(direction, dog) {
    const userId = user.id;

    if (direction === "left") {
      fetch(`/dogs/${dog.id}`, { method: "DELETE" });
      setDogs(dogs.filter((d) => d.id !== dog.id));
      setSwipeDirection("left");
    } else if (direction === "right") {
      fetch(`/likes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: userId, dog_id: dog.id }),
      })
        .then((r) => r.json())
        .then((json) => setLikes([...likes, json]));
      setSwipeDirection("right");
    }

    setTimeout(() => setSwipeDirection(""), 600);
  }

  return (
    <div className="dogcontainer-page">
      <header className="dogcontainer-header">
        <NavLink className="dogcontainer-home-link" to="/">🐾 Home</NavLink>
      </header>

      <div className="dogcontainer-tinder">
        {dogs.map((dog) => (
          <TinderCard
            className="dogcontainer-swipe"
            key={dog.id}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => onSwipe(dir, dog)}
          >
            <div
              className="dogcontainer-card"
              style={{ backgroundImage: `url(${dog.image})` }}
            >
              
              {swipeDirection === "right" && (
                <div className="dogcontainer-overlay right">
                  <span className="overlay-symbol approve">✅</span>
                </div>
              )}
              {swipeDirection === "left" && (
                <div className="dogcontainer-overlay left">
                  <span className="overlay-symbol reject">❌</span>
                </div>
              )}

             
              <div className="dogcontainer-info">
                <p className="dogcontainer-status">Recently Active</p>
                <h3>{dog.name}</h3>
                <p className="dogcontainer-meta">
                  {dog.age} • {dog.gender}
                </p>

                <div className="dogcontainer-interests">
                  {dog.interests?.slice(0, 5).map((int) => (
                    <span key={int.name}>{int.name}</span>
                  ))}
                </div>

                <p className="dogcontainer-details">{dog.details}</p>

               
              </div>
            </div>
          </TinderCard>
        ))}
      </div>

      <Footer user={user} />
    </div>
  );
}

export default DogContainer;
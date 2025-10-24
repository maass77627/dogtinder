


import React, { useEffect, useRef } from "react";
import "./LikePage.css";
import ChatForm from "./ChatForm";
import { useState } from "react";

function LikePage({ likes, setLikes, comments, setComments, user }) {
  const containerRef = useRef(null);
  const [toggle, setToggle] = useState(false)
  console.log(comments)

  function handleDelete(id) {
    fetch(`/likes/${id}`, { method: "DELETE" });
    setLikes((prevLikes) => prevLikes.filter((l) => l.id !== id));
  }

  function handleChat() {
     setToggle(!toggle)
  }

  
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  }, [likes]);

  
  if (!likes || likes.length === 0) {
    return (
      <p style={{ textAlign: "center", marginTop: "50px" }}>
        You have no liked dogs yet!
      </p>
    );
  }

  const dogMap = {};
  likes.forEach((like) => {
    if (like.dog && !dogMap[like.dog.id]) {
      dogMap[like.dog.id] = { ...like.dog, likeId: like.id };
    }
  });
  const uniqueDogs = Object.values(dogMap);

  return (
    <div className="likes-page">
      <div className="likes-container" ref={containerRef}>
        {uniqueDogs.map((dog) => (
          <div className="like-card" key={dog.id}>
            <img className="like-image" src={dog.image} alt={dog.name} />

            <div className="overlay">
              <h2 className="dog-name">{dog.name}</h2>
              <p className="dog-meta">
                {dog.age} • {dog.gender}
              </p>
              {dog.interests && (
                <div className="dog-interests">
                  {dog.interests.slice(0, 5).map((int) => (
                    <span key={int.name} className="interest-tag">
                      {int.name}
                    </span>
                  ))}
                </div>
              )}
              <button
                className="delete-btn"
                onClick={() => handleDelete(dog.likeId)}
              >
                Remove
              </button>
              <button
                className="message-btn"
                onClick={() => handleChat()}
              >
                Message Owner
              </button>
              {toggle && <ChatForm user={user} dog={dog} comments={comments} setComments={setComments}/>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LikePage;
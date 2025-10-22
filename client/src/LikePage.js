// import React from "react";
// import "./LikePage.css";

// function LikePage({ like, likes, setLikes }) {
// console.log(like)
// console.log(likes)



// function handleDelete(id) {

//     fetch(`/likes/${id}`, {
//         method: "DELETE"
//     })
//       let newlikes = likes.filter((lik) => lik.id !== id)
//       setLikes(newlikes)

// }

//     return(
//         <div id="likepage">
//            {like.dog ? <h1>{like.dog.name}</h1> : null }
//            {like.dog ? <img id="likeimage" src={like.dog.image} alt="dog"></img> : null }
//            <button onClick={() =>handleDelete(like.id)}>delete</button>
//         </div>
//     )
// }

// export default LikePage

import React from "react";
import "./LikePage.css";

function LikePage({ likes, setLikes }) {

  function handleDelete(id) {
    fetch(`/likes/${id}`, { method: "DELETE" });
    setLikes(prevLikes => prevLikes.filter(l => l.id !== id));
  }

  if (!likes || likes.length === 0) {
    return <p style={{ textAlign: "center", marginTop: "50px" }}>You have no liked dogs yet!</p>;
  }

  // Deduplicate dogs by ID (keep first occurrence)
  const dogMap = {};
  likes.forEach(like => {
    if (like.dog && !dogMap[like.dog.id]) {
      dogMap[like.dog.id] = { ...like.dog, likeId: like.id };
    }
  });
  const uniqueDogs = Object.values(dogMap);

  return (
    <div id="likepagecontainer">
      {uniqueDogs.map(dog => (
        <div className="like-card" key={dog.id}>
          <img className="like-image" src={dog.image} alt={dog.name} />

          {/* Overlay appears on hover */}
          <div className="overlay">
            <h2 className="dog-name">{dog.name}</h2>
            <p className="dog-meta">{dog.age} • {dog.gender}</p>
            {dog.interests && (
              <div className="dog-interests">
                {dog.interests.slice(0, 5).map(int => (
                  <span key={int.name} className="interest-tag">{int.name}</span>
                ))}
              </div>
            )}
            <button className="delete-btn" onClick={() => handleDelete(dog.likeId)}>
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LikePage;
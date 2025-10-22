// import React from "react";
// import { NavLink } from "react-router-dom";
// import TinderCard from "react-tinder-card";
// import './TinderCards.css';
// import Footer from "./Footer";
// import Buttons from "./Buttons";
// import { useState } from "react";


// function DogContainer ({ dogs, user, setDogs, comments, setComments, likes, setLikes }) {
    
//    const [toggleLeft, setToggleLeft] = useState(false)
//    const [toggleRight, setToggleRight] = useState(false)
   
    

//         function onSwipe(direction, dog, e) {
//             console.log(e)
//             let newdog = dogs.find((doggy) => doggy.name === dog.name)
//             let id = user.id
//             let idtwo = newdog.id
        
//             if (direction === "left") {
//             fetch(`/dogs/${newdog.id}`, {
//                 method: "DELETE",
//               })

//              let newdogs = dogs.filter((doggy) => doggy.id !== newdog.id)
//              setDogs(newdogs)
//              setToggleLeft(!toggleLeft)
//              console.log('You swiped: ' + direction)
//             setToggleLeft(!toggleLeft)

//          } else {
//                 fetch(`/likes`, {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 }, 
//                 body: JSON.stringify({user_id: id, dog_id: idtwo})
//             })
//             .then((response) => response.json())
//             .then((json) => {
//                 let newlikes = [...likes, json]
//                 setLikes(newlikes)
//                 console.log(likes)
//                 setToggleRight(!toggleRight)
//             })
//              console.log('You swiped: ' + direction)
//              setToggleRight(!toggleRight)
//          }
       
//          }

         
//         return (

//             <div id="background">
//                 <NavLink id="links" to="/">Home Page</NavLink>
//                  <div className="tinderCards_cardContainer">
//                     {dogs.map((dog) => (
                        
//                     <div key={dog.id} >
//                         <TinderCard 
//                               dog={dog}
//                               user={user}
//                               setDogs={setDogs}
//                               preventSwipe={['up', 'down']} 
//                               onSwipe={(direction, e) => onSwipe(direction, dog, e)}
//                               className="swipe" 
//                             >
//                              { toggleRight ?  <img id="swipeimg" className="nothidden" src="yes.png" alt="yes"></img> : <img id="swipeimg" className="hidden" src="yes.png" alt="yes"></img> }
//                               { toggleLeft ?  <img id="swipeimgn" className="nothidden" src="nope.png" alt="no"></img> : <img id="swipeimgn" className="hidden" src="nope.png" alt="no"></img> }
//                                 <div
//         style={{ backgroundImage: `url(${dog.image})`}}
//         className="card"
//         >
//         <div id="info">
//         <p id="active">Recently Active</p>
//         <h3 id="name">{dog.name}</h3>
//         <p id="age">{dog.age}</p>
//         <p id="gender">{dog.gender}</p>
//         {dog.interests ? dog.interests.slice(0,8).map((int) => <span id="interesttinder">{int.name}</span>) : null}
//         <p id="description">{dog.details}</p>
//         </div>
//             <Buttons dog={dog} dogs={dogs} user={user} setDogs={setDogs} comments={comments} setComments={setComments} ></Buttons>
//         </div>
//                         </TinderCard>
                        
//                     </div>
//                 ))}
//                 </div>
//              <Footer user={user}></Footer> 
//         </div>
//     )


// }

// export default DogContainer


// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import TinderCard from "react-tinder-card";
// import "./TinderCards.css";
// import Footer from "./Footer";
// import Buttons from "./Buttons";

// function DogContainer({ dogs, user, setDogs, comments, setComments, likes, setLikes }) {
//   const [swipeDirection, setSwipeDirection] = useState("");

//   function onSwipe(direction, dog) {
//     const currentDog = dogs.find((d) => d.id === dog.id);
//     const userId = user.id;

//     if (direction === "left") {
//       fetch(`/dogs/${dog.id}`, { method: "DELETE" });
//       setDogs(dogs.filter((d) => d.id !== dog.id));
//       setSwipeDirection("left");
//     } else if (direction === "right") {
//       fetch(`/likes`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ user_id: userId, dog_id: dog.id }),
//       })
//         .then((r) => r.json())
//         .then((json) => setLikes([...likes, json]));
//       setSwipeDirection("right");
//     }

//     setTimeout(() => setSwipeDirection(""), 600);
//   }

//   return (
//     <div className="tinder-page">
//       <header className="tinder-header">
//         <NavLink className="home-link" to="/">🐾 Home</NavLink>
//       </header>

//       <div className="tinder-container">
//         {dogs.map((dog) => (
//           <TinderCard
//             className="swipe"
//             key={dog.id}
//             preventSwipe={["up", "down"]}
//             onSwipe={(dir) => onSwipe(dir, dog)}
//           >
//             <div className="dog-card" style={{ backgroundImage: `url(${dog.image})` }}>
//               {swipeDirection === "right" && <img src="yes.png" alt="Yes" className="swipe-overlay right" />}
//               {swipeDirection === "left" && <img src="nope.png" alt="Nope" className="swipe-overlay left" />}

//               <div className="dog-info">
//                 <p className="status">Recently Active</p>
//                 <h3>{dog.name}</h3>
//                 <p className="meta">{dog.age} • {dog.gender}</p>
//                 <div className="interests">
//                   {dog.interests?.slice(0, 5).map((int) => (
//                     <span key={int.name}>{int.name}</span>
//                   ))}
//                 </div>
//                 <p className="details">{dog.details}</p>
//                 <Buttons
//                   dog={dog}
//                   dogs={dogs}
//                   user={user}
//                   setDogs={setDogs}
//                   comments={comments}
//                   setComments={setComments}
//                 />
//               </div>
//             </div>
//           </TinderCard>
//         ))}
//       </div>

//       <Footer user={user} />
//     </div>
//   );
// }

// export default DogContainer;


import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import Footer from "./Footer";
import Buttons from "./Buttons";

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
    <div className="tinder-page">
      <header className="tinder-header">
        <NavLink className="home-link" to="/">🐾 Home</NavLink>
      </header>

      <div className="tinder-container">
        {dogs.map((dog) => (
          <TinderCard
            className="swipe"
            key={dog.id}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => onSwipe(dir, dog)}
          >
            <div className="dog-card" style={{ backgroundImage: `url(${dog.image})` }}>
              
              {/* Swipe overlays with professional symbols */}
              {swipeDirection === "right" && (
                <div className="swipe-overlay right">
                  <span style={{
                    fontSize: '120px',
                    color: 'limegreen',
                    fontWeight: 'bold',
                    textShadow: '2px 2px 5px rgba(0,0,0,0.5)'
                  }}>✅</span>
                </div>
              )}
              {swipeDirection === "left" && (
                <div className="swipe-overlay left">
                  <span style={{
                    fontSize: '120px',
                    color: 'red',
                    fontWeight: 'bold',
                    textShadow: '2px 2px 5px rgba(0,0,0,0.5)'
                  }}>❌</span>
                </div>
              )}

              <div className="dog-info">
                <p className="status">Recently Active</p>
                <h3>{dog.name}</h3>
                <p className="meta">{dog.age} • {dog.gender}</p>
                <div className="interests">
                  {dog.interests?.slice(0, 5).map((int) => (
                    <span key={int.name}>{int.name}</span>
                  ))}
                </div>
                <p className="details">{dog.details}</p>
                <Buttons
                  dog={dog}
                  dogs={dogs}
                  user={user}
                  setDogs={setDogs}
                  comments={comments}
                  setComments={setComments}
                />
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
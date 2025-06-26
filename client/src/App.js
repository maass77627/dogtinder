import Login from "./Login";
import Signup from "./Signup";
import DogContainer from "./DogContainer";
import React from "react";
import './App.css';
import { useState } from "react";
import { useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route, Link }
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { NavLink } from "react-router-dom";
import Likes from "./Likes";
import Chats from "./Chats";


 

function App() {

  const [toggle, setToggle] = useState(false)
  const [toggler, setToggler] = useState(false)

  const [ user, setUser ] = useState(null);
  const [dogs, setDogs] = useState([])
  const [likes, setLikes] = useState([])
  const [comments, setComments] = useState([])
  // const [userdogs, setUserDogs] = useState([])
  
  useEffect(() => {
    fetch("/dogs")
    .then((response) => response.json())
    .then((json) => {
      setDogs(json)
     })
      
  }, [])

  useEffect(() => {
    fetch("/likes")
    .then((response) => response.json())
    .then((json) => {
      setLikes(json)
      
    })

  }, [])

  useEffect(() => {
    fetch("/comments")
    .then((response) => response.json())
    .then((json) => {
      setComments(json)
      
    })
  }, [])



  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
     response.json().then((user) => setUser(user));
        }
    });
  }, []);

      function handleSignup() {
         setToggle(!toggle)
        }

      function handleLogin() {
         setToggler(!toggler)
        }




       function handleClick(e) {
         fetch("/logout", {
          method: "DELETE"
        })
       .then((response) => {
        if (response.ok) {
        setUser(null)
       }
       })
        }


const Home = () => (
  
  <div id="home"   style={{ backgroundImage: "url(/dogdaterdark.jpg)" }}>
    <img id="logo" src="/tinderflame.png" alt="logo"></img>
    <p id="logotext">Scoundrel</p>
    <button onClick={handleLogin} id="homebtn2">Log in</button>
     
      {user ? <h2 id="greet">Welcome, {user.username}! </h2> : null }
      {user ? <NavLink id="links" to="/dogs">UserPage</NavLink> : null}
      
      { toggler ? <Login setUser={setUser} /> : null}
      
      <h1 id="title">Swipe Right.</h1>
      <button onClick={handleSignup} id="homebutton">Create account</button>
     { toggle ? <Signup setUser={setUser}></Signup> : null}

      { user ? <button onClick={handleClick}>Logout</button> : null }

  </div>
);



  return (
    <div className="App">
        
       <BrowserRouter>
        <Routes>
            <Route path="/" element={Home()}/>
            <Route path="/dogs" element={<DogContainer user={user} dogs={dogs} setDogs={setDogs}/>} />
            <Route path="/likes" element={<Likes user={user} likes={likes} />} />
            <Route path="/chat" element={<Chats comments={comments}/>}/>
        </Routes>
      </BrowserRouter>

         
     
    </div>
  );
}

export default App;

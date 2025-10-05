import Login from "./Login";
import Signup from "./Signup";
import DogContainer from "./DogContainer";
import React from "react";
import './App.css';
import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { NavLink } from "react-router-dom";
import Likes from "./Likes";
import Chats from "./Chats";
import Owner from "./Owner";
import DogForm from "./DogForm";
import Profile from "./Profile";


function App() {

  const [toggle, setToggle] = useState(false)
  const [toggler, setToggler] = useState(false)
  const [ user, setUser ] = useState(null);
  const [dogs, setDogs] = useState([])
  const [likes, setLikes] = useState([])
  const [comments, setComments] = useState([])
  const [role, setRole] = useState("")
  const [users, setUsers] = useState([])
  const [interests, setInterests] = useState([])
  

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
     response.json().then((user) => setUser(user));
        }
    });
  }, []);

  
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
    fetch("/interests")
    .then((response) => response.json())
    .then((json) => {
      setInterests(json)
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
    fetch("/users")
    .then((response) => response.json())
    .then((json) => {
      setUsers(json)
      
    })
  }, [])

  function handleSignup() {
     setToggle(!toggle)
  }

  function handleLogin() {
         setToggler(!toggler)
 }

    
 function handleClick() {
        fetch("/logout", {
          method: "DELETE"
        })
       .then((response) => {
        if (response.ok) {
        setUser(null)
       }
       })
        }



        const replyAdd = (parentId, reply) => {
          console.log(reply)
        const newComment = { id: Date.now(), context: reply.context, replies: [], user_id: reply.user_id, parent_id: parentId };
        console.log(comments)

        const addReplyRecursively = (comments) => {
         console.log(comments)

        
          
          return comments.map((comment) => {
            if (comment.id === parentId) {
              return { ...comment, replies: [...(comment.replies || []), newComment] };
            }
            return { ...comment, replies: comment.replies ? addReplyRecursively(comment.replies) : [] };
          });
        };

      setComments((prevComments) => addReplyRecursively(prevComments));

     

      };
    



       
        const Home = () => (
              <div id="home"   style={{ backgroundImage: "url(/dogdaterdark.jpg)" }}>
              <img id="logo" src="/tinderflame.png" alt="logo"></img>
              <p id="logotext">furfriend</p>
              <button onClick={handleLogin} id="homebtn2">Log in</button>
              {user ? <h2 id="greet">Welcome, {user.username}! </h2> : null }
              {user && user.role === "buyer" ? <NavLink id="links" to="/dogs">UserPage</NavLink> : null}
              {user && user.role === "owner" ? <NavLink id="links" to="/owners">UserPage</NavLink> : null}
              { toggler ? <Login setUser={setUser} /> : null}
              <h1 id="title">Swipe Right.</h1>
              <button onClick={handleSignup} id="homebutton">Create account</button>
              { toggle ? <Signup role={role} setRole={setRole} setUser={setUser}></Signup> : null}
              { user ? <button onClick={handleClick}>Logout</button> : null }
              </div>
          );



  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
            <Route path="/" element={Home()}/>
            <Route path="/dogs" element={<DogContainer likes={likes} setLikes={setLikes} comments={comments} setComments={setComments} user={user} dogs={dogs} setDogs={setDogs}/>} />
            <Route path="/owners" element={<Owner comments={comments} setDogs={setDogs}  dogs={dogs} user={user} />} />
            <Route path="/likes" element={<Likes setLikes={setLikes} user={user} likes={likes} />} />
            <Route path="/chat" element={<Chats replyAdd={replyAdd} setComments={setComments} user={user} comments={comments}/>}/>
            <Route path="/form" element={<DogForm interests={interests} dogs={dogs} setDogs={setDogs} user={user} />}/>
            <Route path="/ownerchat" element={<Chats replyAdd={replyAdd} setComments={setComments} comments={comments} user={user} />}/> 
            <Route path="/profile" element={<Profile users={users} setUsers={setUsers} user={user} />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

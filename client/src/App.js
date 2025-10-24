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
import Home from "./Home";


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



      //   const replyAdd = (parentId, reply) => {
      //     console.log(reply)
      //   const newComment = { id: Date.now(), context: reply.context, replies: [], user_id: reply.user_id, parent_id: parentId };
      //   console.log(comments)

      //   const addReplyRecursively = (comments) => {
      //    console.log(comments)

      //     return comments.map((comment) => {
      //       if (comment.id === parentId) {
      //         return { ...comment, replies: [...(comment.replies || []), newComment] };
      //       }
      //       return { ...comment, replies: comment.replies ? addReplyRecursively(comment.replies) : [] };
      //     });
      //   };

      // setComments((prevComments) => addReplyRecursively(prevComments));

     

      // };

      const replyAdd = (parentId, reply) => {
        console.log("Reply received:", reply);
      
        // ✅ Include user so username shows up right away
        const newComment = {
          id: reply.id || Date.now(),
          context: reply.context,
          replies: [],
          user_id: reply.user_id,
          user: reply.user,     // <-- Add this line
          parent_id: parentId,
        };
      
        const addReplyRecursively = (comments) => {
          return comments.map((comment) => {
            if (comment.id === parentId) {
              return {
                ...comment,
                replies: [...(comment.replies || []), newComment],
              };
            }
            return {
              ...comment,
              replies: comment.replies
                ? addReplyRecursively(comment.replies)
                : [],
            };
          });
        };
      
        setComments((prevComments) => addReplyRecursively(prevComments));
      };
    



  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
         <Route path="/" element={<Home 
         user={user}
         handleLogin={handleLogin}
         handleSignup={handleSignup}
         handleClick={handleClick}
         toggler={toggler}
         toggle={toggle}
         setUser={setUser}
         role={role}
         setRole={setRole}/>}/> 
             {/* <Route path="/" element={Home()}/>  */}
            <Route path="/dogs" element={<DogContainer likes={likes} setLikes={setLikes} comments={comments} setComments={setComments} user={user} dogs={dogs} setDogs={setDogs}/>} />
            <Route path="/owners" element={<Owner comments={comments} setDogs={setDogs}  dogs={dogs} user={user} />} />
            <Route path="/likes" element={<Likes comments={comments} setComments={setComments} setLikes={setLikes} user={user} likes={likes} />} />
            <Route path="/chat" element={<Chats users={users} replyAdd={replyAdd} setComments={setComments} user={user} comments={comments}/>}/>
            <Route path="/form" element={<DogForm interests={interests} dogs={dogs} setDogs={setDogs} user={user} />}/>
            <Route path="/ownerchat" element={<Chats users={users} replyAdd={replyAdd} setComments={setComments} comments={comments} user={user} />}/> 
            <Route path="/profile" element={<Profile users={users} setUsers={setUsers} user={user} />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

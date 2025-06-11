import Login from "./Login";
import Signup from "./Signup";
import DogContainer from "./DogContainer";
import React from "react";
import './App.css';
import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
 

function App() {

  const [toggle, setToggle] = useState(false)
  const [toggler, setToggler] = useState(false)

  const [ user, setUser ] = useState(null);
  const [dogs, setDogs] = useState([])

  
  useEffect(() => {
    fetch("/dogs")
    .then((response) => response.json())
    .then((json) => {
      setDogs(json)
      console.log(json)})
      
  }, [])



  useEffect(() => {

    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
       
      }
    });
  }, []);




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
  
  <div id="home"   style={{ backgroundImage: "url(/dogdatetr.jpg)" }}>
    <img id="logo" src="/tinderlogo.webp"></img>
    <button id="homebtn2">Log in</button>
      {/* {user ? <h2>Welcome, {user.username}!</h2> : <Login setUser={setUser} />} */}
      {user ? <h2>Welcome, {user.username}!</h2> : null }
      { toggler ? <Login setUser={setUser} /> : null}
      
      <h1 id="title">Swipe Right</h1>
      <button id="homebutton">Create account</button>
     { toggle ? <Signup setUser={setUser}></Signup> : null}

      <button onClick={handleClick}>Logout</button>

  </div>
);



  return (
    <div className="App">

       <BrowserRouter>
        <Routes>
          <Route path="/" element={Home()}>
            <Route path="/dogs" element={<DogContainer dogs={dogs} />} />
          </Route>
        </Routes>
      </BrowserRouter>

          {/* {user ? <h2>Welcome, {user.username}!</h2> : <Login setUser={setUser} />}
      
      <Signup setUser={setUser}></Signup>

      <button onClick={handleClick}>Logout</button> */}


       {/* <DogContainer dogs={dogs}></DogContainer>  */}
     
    </div>
  );
}

export default App;

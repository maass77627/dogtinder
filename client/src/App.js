import Login from "./Login";
import Signup from "./Signup";
import DogContainer from "./DogContainer";
import React from "react";
import './App.css';
import { useState } from "react";
import { useEffect } from "react";
// import { BrowserRouter, Routes, Route} from 'react-router-dom';
 

function App() {


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
  <div id="home">
      {user ? <h2>Welcome, {user.username}!</h2> : <Login setUser={setUser} />}
      
      <Signup setUser={setUser}></Signup>

      <button onClick={handleClick}>Logout</button>

  </div>
);



  return (
    <div className="App">

       {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={Home()}>
            <Route path="/dogs" element={<DogContainer dogs={dogs} />} />
          </Route>
        </Routes>
      </BrowserRouter> */}

          {/* {user ? <h2>Welcome, {user.username}!</h2> : <Login setUser={setUser} />}
      
      <Signup setUser={setUser}></Signup>

      <button onClick={handleClick}>Logout</button> */}


       <DogContainer dogs={dogs}></DogContainer> 
     
    </div>
  );
}

export default App;

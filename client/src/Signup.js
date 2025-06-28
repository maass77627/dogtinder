import { useState } from "react";
import React from "react";

function Signup({ setUser, setRole, role }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  // const [userType, setUserType] = useState("")


  function handleSubmit(e) {
    console.log(role)
    e.preventDefault();
    
    let form = e.target.parentNode
    form.className = "hidden"
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        role: role,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }



    return(
        <div id="signup">
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <label htmlFor="username">Username</label>
          <br></br>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br></br>
          <label htmlFor="password">Password</label>
          <br></br>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        
          />
          <br></br>
          <label htmlFor="password">Password Confirmation</label>
          <input
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            
          />
          <br></br>
          <label><strong>Who are you?</strong></label><br></br>
          <label>Hopeful Pet Parent</label>
          <input type="radio" value="buyer" checked={role === "buyer"} onChange={(e) => setRole(e.target.value)}></input>
          <label>Owner</label>
          <input type="radio" value="owner" checked={role === "owner"} onChange={(e) => setRole(e.target.value)}></input>
          <br></br>
          <button type="submit">Sign Up</button>
        </form>
      </div>

    )
}

export default Signup
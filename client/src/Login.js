import { useState } from "react";
import React from "react";

function Login({ setUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
      console.log(e.target)
      let form = e.target.parentNode
      form.className = "hidden"

        e.preventDefault();
        console.log(username)
        console.log(password)
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }).then((r) => {
          if (r.ok) {
            r.json().then((user) => setUser(user));
            
          }
        });
      }

    return (
        <div id="login">
         <form onSubmit={handleSubmit}>
         <h1>Login</h1>
        <label id="label" >Username </label> <br></br>
        <br></br>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /> <br></br>
        
        <label id="label" htmlFor="password">Password </label> <br></br>
        <br></br>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <button type="submit">Login</button>
      </form>
    </div>

    )



}

export default Login
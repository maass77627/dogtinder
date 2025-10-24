import React from "react";
import { NavLink } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import "./Home.css";

function Home({user, handleLogin, handleSignup, handleClick, toggler, toggle, setUser, role, setRole}) {
  return (
    <div
      className="home-page"
      style={{ backgroundImage: "url(/dogdaterdark.jpg)" }}
    >
      <img className="logo" src="/tinderflame.png" alt="logo" />
      <p className="logotext">furfriend</p>

      <button onClick={handleLogin} className="homebtn2">
        Log in
      </button>

      {user && <h2 className="greet">Welcome, {user.username}!</h2>}

      {user && user.role === "buyer" && (
        <NavLink className="links" to="/dogs">
          UserPage
        </NavLink>
      )}
      {user && user.role === "owner" && (
        <NavLink className="links" to="/owners">
          UserPage
        </NavLink>
      )}

      {toggler && <Login setUser={setUser} />}

      <h1 className="title">Swipe Right.</h1>

      <button onClick={handleSignup} className="homebutton">
        Create account
      </button>

      {toggle && <Signup role={role} setRole={setRole} setUser={setUser} />}

      {user && (
        <button onClick={handleClick} className="logout-btn">
          Logout
        </button>
      )}
    </div>
  );
}

export default Home;
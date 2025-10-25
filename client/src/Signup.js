
import { useState, useEffect } from "react";
import React from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

function Signup({ setUser, setRole, role }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [image, setImage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [hideForm, setHideForm] = useState(false);
  const [hideSuccess, setHideSuccess] = useState(false);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setIsFadingOut(true);

    setTimeout(() => {
      fetch("/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
          password_confirmation: passwordConfirmation,
          image,
          role,
        }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((user) => {
            setUser(user);
            setSubmitted(true);
          });
        } else {
          setIsFadingOut(false);
        }
      });
    }, 400);
  }

  
  function handleClose() {
    setIsFadingOut(true);
    setTimeout(() => setHideForm(true), 400);
  }

 
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setHideSuccess(true);
        navigate("/"); 
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [submitted, navigate]);

  if (hideForm) return null; 

  return (
    <div className="signup-container">
      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className={`signup-form ${isFadingOut ? "fade-out" : "fade-in"}`}
        >
          <button
            type="button"
            className="close-btn"
            onClick={handleClose}
            aria-label="Close signup form"
          >
            ✖
          </button>

          <h1>Sign Up</h1>

          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label htmlFor="password_confirmation">Password Confirmation</label>
          <input
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            required
          />

          <label htmlFor="img">Image URL</label>
          <input
            type="text"
            id="img"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          <label>
            <strong>Who are you?</strong>
          </label>
          <label>
            Hopeful Pet Parent
            <input
              type="radio"
              value="buyer"
              checked={role === "buyer"}
              onChange={(e) => setRole(e.target.value)}
            />
          </label>
          <label>
            Owner
            <input
              type="radio"
              value="owner"
              checked={role === "owner"}
              onChange={(e) => setRole(e.target.value)}
            />
          </label>

          <button type="submit">Sign Up</button>
        </form>
      ) : (
        !hideSuccess && (
          <div className="signup-success fade-in">
            <h2>🎉 Account created successfully!</h2>
            <p>Welcome aboard, {username}!</p>
          </div>
        )
      )}
    </div>
  );
}

export default Signup;
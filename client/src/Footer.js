import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";


function Footer({ user }) {
    



    return(
        <div id="footer">
            <Link  to="/">
            <button id="two">
                <img id="icon" src="tinderflame.png" alt="flame"></img>
                home
            </button>
            </Link>
            {user.role === "buyer" ? 
            <Link to="/likes">
            <button id="two">
            <img id="icon" src="heart.png" alt="flame"></img>
            likes
            </button>
            </Link> :
            <Link to="/form">
            <button  id="two">
            <img id="icon" src="plusicon.png" alt="flame"></img><br></br>
            Add Pup
            </button>
            </Link>
        }


            {user.role === "buyer" ? 
            <Link to="/chat">
            <button id="two">
            <img id="icon" src="chat.png" alt="flame"></img>
            chat
            </button>
            </Link> :
            <Link to="/ownerchat">
            <button id="two">
            <img id="icon" src="chat.png" alt="flame"></img>
            chat
            </button>
            </Link>
            }

            <Link to="/profile">
            <button id="two">
            <img id="icon" src="profile.png" alt="flame"></img>
            profile
            </button>
            
            </Link>
        </div>
    )
}

export default Footer
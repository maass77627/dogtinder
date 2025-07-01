import React from "react";
import OwnerDog from "./OwnerDog";
import "./Owner.css"
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

function Owner({ user, dogs }) {

    let ownerdogs = dogs.filter((doggy) => doggy.user_id === user.id)
   

    return(
        <div id="owner">
            <NavLink id="links" to="/">Home Page</NavLink>
            <h1>{user.username}</h1>
            {ownerdogs ? ownerdogs.map((dog) => <OwnerDog key={dog.id} dog={dog}></OwnerDog>) : null}
            <Footer user={user}></Footer>
        </div>
    )
}

export default Owner
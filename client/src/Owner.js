import React from "react";
import OwnerDog from './OwnerDog';
import "./Owner.css"
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

function Owner({ user, dogs, setDogs }) {

    let ownerdogs = dogs.filter((doggy) => doggy.user_id === user.id)
   

    return(
        <div id="owner">
            <NavLink id="links" to="/">Home Page</NavLink>
            <h1 id="ownername">{user.username.charAt(0).toUpperCase()+ user.username.slice(1).toLowerCase()}'s Dogs</h1>
            {ownerdogs ? ownerdogs.map((dog) => <OwnerDog dogs={dogs} setDogs={setDogs} user={user} key={dog.id} dog={dog}></OwnerDog>) : null}
            <Footer user={user}></Footer>
        </div>
    )
}

export default Owner
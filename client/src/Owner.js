import React from "react";
import DogForm from "./DogForm";
import OwnerDog from "./OwnerDog";
import "./Owner.css"
import { NavLink } from "react-router-dom";

function Owner({ user, dogs }) {

    let ownerdogs = dogs.filter((doggy) => doggy.user_id === user.id)

    return(
        <div id="owner">
            <NavLink id="links" to="/">Home Page</NavLink>
            <h1>{user.username}</h1>
            <DogForm user={user}></DogForm>
            {ownerdogs ? ownerdogs.map((dog) => <OwnerDog key={dog.id} dog={dog}></OwnerDog>) : null}



        </div>
    )
}

export default Owner
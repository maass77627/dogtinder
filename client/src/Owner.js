import React from "react";
import DogForm from "./DogForm";

function Owner({ user }) {



    return(
        <div>
            <h1>{user.username}</h1>
            <DogForm user={user}></DogForm>



        </div>
    )
}

export default Owner
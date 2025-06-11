import React from "react";
import Dog from "./Dog"

function DogContainer({ dogs }) {
    console.log(dogs)


    return (

        <div id="background">
        

        <div>
                {dogs ? dogs.map((dog) => <Dog dog={dog} ></Dog>) : null}

        </div>

        </div>
    )


}

export default DogContainer
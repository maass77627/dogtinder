import React from "react";
import Dog from "./Dog"

function DogContainer({ dogs }) {
    console.log(dogs)


    return (
        

        <div>
                {dogs ? dogs.map((dog) => <Dog dog={dog} ></Dog>) : null}

        </div>
    )


}

export default DogContainer
import React from "react";


function Dog({ dog }) {
    console.log(dog)


    return (
         <div id="dog" style={{ backgroundImage: `url(${dog.image})` }}>
        
           <div id="info">
            <p id="active">Recently Active</p>
            <h1 id="name">{dog.name}</h1>
            <p id="age">{dog.age}</p>
            <p id="description">{dog.details}</p>
            {/* <button>back</button>
            <button>delete</button>
            <button>like</button>
            <button>comment</button> */}
            </div>
        </div>



    )
}

export default Dog
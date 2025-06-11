import React from "react";
// import { motion } from 'framer-motion';

function Dog({ dog }) {
    console.log(dog)


    return (
        <div>
             {/* <motion.div
      className="card"
      style={{ backgroundColor: "yellow" }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      whileDrag={{ scale: 1.1 }}
    /> */}
            <p id="active">Recently Active</p>
            <h1 id="name">{dog.name}</h1>
            <p id="age">{dog.age}</p>
            <img id="image" src={dog.image} alt="dog"></img>
            <p id="description">{dog.details}</p>
            <button>back</button>
            <button>delete</button>
            <button>like</button>
            <button>comment</button>
        </div>



    )
}

export default Dog
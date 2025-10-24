


import React, { useState } from "react";
import "./Owner.css";
import Edit from "./Edit";

function OwnerDog({ dog, user, dogs, setDogs }) {
  const [toggle, setToggle] = useState(false);

  const handleDelete = () => {
    fetch(`/dogs/${dog.id}`, { method: "DELETE" });
    setDogs(dogs.filter((d) => d.id !== dog.id));
  };

  const handleEdit = () => setToggle(!toggle);

  const capitalizeFirstLetter = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  const uniqueInterests = dog.interests?.filter(
    (record, index, self) => index === self.findIndex((r) => r.name === record.name)
  );

  return (
    <div className="dog-card">
      <h2 className="dog-name">{dog.name}</h2>
      <img className="dog-image" src={dog.image} alt={dog.name} />
      <div className="dog-info">
        <p className="dog-age">{dog.age} years old</p>
        <p className="dog-gender">{dog.gender}</p>
        <p className="dog-details">{capitalizeFirstLetter(dog.details)}</p>
        <div className="dog-interests">
          {uniqueInterests?.slice(0, 8).map((int) => (
            <span key={int.name} className="interest-chip">
              {int.name}
            </span>
          ))}
        </div>
      </div>
      <div className="dog-actions">
        <button className="btn delete-btn" onClick={handleEdit}>
          {toggle ? "Close Edit" : "Edit"}
        </button>
        <button className="btn delete-btn" onClick={handleDelete}>
          Delete
        </button>
      </div>

      
      {toggle && (
        <Edit
          dog={dog}
          dogs={dogs}
          setDogs={setDogs}
          onClose={() => setToggle(false)}
        />
      )}
    </div>
  );
}

export default OwnerDog;
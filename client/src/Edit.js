

import React, { useState } from "react";
import "./EditForm.css";

function Edit({ user, dog, dogs, setDogs }) {
  const [dogData, setDogData] = useState({
    name: dog.name,
    age: dog.age,
    interests: dog.interests ? [...dog.interests] : [],
    details: dog.details,
    image: dog.image,
  });

  const [visible, setVisible] = useState(true);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDogData({ ...dogData, [name]: value });
  };

  
  const handleRemoveInterest = (id) => {
    setDogData({
      ...dogData,
      interests: dogData.interests.filter((i) => i.id !== id),
    });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = dog.id;

   
    const payload = {
      ...dogData,
      interests: undefined, 
      interest_ids: dogData.interests.map((i) => i.id),
    };

    fetch(`/dogs/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ dog: payload }), 
    })
      .then((r) => r.json())
      .then((updatedDog) => {
        const newDogs = dogs.map((d) => (d.id === id ? updatedDog : d));
        setDogs(newDogs);
        setVisible(false); 
      })
      .catch((err) => console.error("Error updating dog:", err));
  };

  if (!visible) return null;

  return (
    <div className="edit-container">
      <form className="edit-form" onSubmit={handleSubmit}>
        <h2>Edit Dog Profile</h2>

        <label>Name</label>
        <input
          name="name"
          type="text"
          value={dogData.name}
          onChange={handleChange}
        />

        <label>Age</label>
        <input
          name="age"
          type="text"
          value={dogData.age}
          onChange={handleChange}
        />

        <label>Details</label>
        <textarea
          name="details"
          value={dogData.details}
          onChange={handleChange}
          rows="3"
        />

        <label>Image URL</label>
        <input
          name="image"
          type="text"
          value={dogData.image}
          onChange={handleChange}
        />

        <label>Interests</label>
        <div className="interest-tags">
          {dogData.interests.length > 0 ? (
            dogData.interests.map((interest) => (
              <span
                key={interest.id || interest.name}
                className="interest-tag"
                onClick={() => handleRemoveInterest(interest.id)}
              >
                {interest.name} ✕
              </span>
            ))
          ) : (
            <p className="no-interests">No interests listed</p>
          )}
        </div>

        <button type="submit" className="edit-submit-btn">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default Edit;
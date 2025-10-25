

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./DogForm.css";

function DogForm({ user, dogs, setDogs, interests }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [dogInterests, setDogInterests] = useState([]);
  const [details, setDetails] = useState("");
  const [image, setImage] = useState("");
  const [gender, setGender] = useState("");
  const [lookingFor, setLookingFor] = useState("");

  const handleInterestClick = (interest) => {
    if (!dogInterests.includes(interest)) {
      setDogInterests([...dogInterests, interest]);
    } else {
      setDogInterests(dogInterests.filter((i) => i.id !== interest.id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const interestIds = dogInterests.map((i) => i.id);

    fetch(`/users/${user.id}/dogs`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        dog: {
          name,
          age,
          details,
          image,
          user_id: user.id,
          gender,
          lookingfor: lookingFor,
          interest_ids: interestIds,
        },
        
      }),
    })
      .then((r) => r.json())
      .then((json) => setDogs([...dogs, json]));

    setName("");
    setAge("");
    setDogInterests([]);
    setDetails("");
    setImage("");
    setGender("");
    setLookingFor("");
  };

  const uniqueInterests = interests.filter(
    (record, index, self) =>
      index === self.findIndex((r) => r.name === record.name)
  );

  return (
    <div id="dogform">
      <NavLink id="links" to="/owners">
        Home Page
      </NavLink>
      <h2>Add Your Pet</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          id="input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Age</label>
        <input
          id="input"
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />

        <label>Gender</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              value="male"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              value="female"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
            />
            Female
          </label>
        </div>

        <label>Interests</label>
        <div className="tag-input">
          {dogInterests.map((i) => (
            <div
              className="tag selected"
              key={i.id}
              onClick={() => handleInterestClick(i)}
            >
              {i.name} ×
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "5px",
            marginTop: "5px",
          }}
        >
          {uniqueInterests.map((int) => {
            const isSelected = dogInterests.includes(int);
            return (
              <div
                key={int.id}
                className={`tag ${isSelected ? "selected" : "unselected"} hvr-back-pulse`}
                onClick={() => handleInterestClick(int)}
              >
                {int.name}
              </div>
            );
          })}
        </div>

        <label>Looking For</label>
        <input
          id="input"
          type="text"
          value={lookingFor}
          onChange={(e) => setLookingFor(e.target.value)}
        />

        <label>Details</label>
        <input
          id="input"
          type="text"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />

        <label>Profile Photo URL</label>
        <input
          id="input"
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default DogForm;
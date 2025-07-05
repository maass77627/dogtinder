// import React from "react";
// import { useState } from "react";
// import "./EditForm.css";


// function DogEditForm({dog, user}) {
//     console.log(user)
//     console.log(dog)
    
//     const [ formData, setFormData ] = useState({
//         name: dog.name,
//         age: dog.age,
//         interests: dog.interests,
//         details: dog.details,
//         image: dog.image
//     })


//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         console.log(name)
//         console.log(value)
//         setFormData((prevData) => ({
//           ...prevData,
//           [name]: value,
//         }));
//       };

//     // function handleNameChange(e) {
//     //     setFormData({
//     //         ...formData, 
//     //        name: e.target.value
//     //     })

//     // }

//     // function handleAgeChange(e) {
//     //     setFormData({
//     //         ...formData, 
//     //        age: e.target.value
//     //     })

//     // }

//     // function handleInterestsChange(e) {
//     //     setFormData({
//     //         ...formData, 
//     //        interests: e.target.value
//     //     })

//     // }

//     // function handleDetailsChange(e) {
//     //     setFormData({
//     //         ...formData, 
//     //        details: e.target.value
//     //     })

//     // }

//     // function handleImageChange(e) {
//     //     setFormData({
//     //         ...formData, 
//     //        image: e.target.value
//     //     })

//     // }



//     function handleSubmit(e) {
//         let id = dog.id
//         console.log(id)
//         e.preventDefault()
//         // fetch(`/dogs/${id}`, {
//         //     method: "PATCH", 
//         //     headers: {
//         //         "Content-Type": "application/json",
//         //     },
//         //     body: JSON.stringify({formData})
//         //  })

//     }


//      return(
        
//         <div id="editform">
//                 <form  onSubmit={handleSubmit}>
//                     <input type="text" name="name" onChange={handleChange}  value={formData.name}></input>
//                     <input type="text" name="age" onChange={handleChange} value={formData.age}></input>
//                     <input type="text" name="interests" onChange={handleChange}  value={formData.interests}></input>
//                     <input type="text" name="details" onChange={handleChange}  value={formData.details}></input>
//                     <input type="text" name="image" onChange={handleChange} value={formData.image}></input>
//                     <input type="submit" value="submit">Edit</input>
//                 </form>
//         </div>
//         )
// }

// export default DogEditForm
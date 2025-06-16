import React from "react";
import "./Buttons.css";
//  import ReplayIcon from '@mui/icons-material/Replay';
// import CloseIcon from '@mui/icons-material/Close';
// import StarRateIcon from '@mui/icons-material/StarRate';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import FlashOnIcon from '@mui/icons-material/FlashOn';

function Buttons({ user, dogs}) {
    console.log(dogs)

    function handleLike(e) {
        console.log(e.target.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[0].childNodes[1].innerText)
        let name = e.target.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[0].childNodes[1].innerText
        console.log(name)
        console.log(dogs)
         let doggy = dogs.find((dog) => dog.name === name)
        console.log(doggy)

        fetch(`/users/${user.id}/dogs`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(doggy)
        })
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
        })



    }

    return (
        <div id="buttons">
            {/* <ReplayIcon /> */}
            {/* <CloseIcon/>
            <StarRateIcon/>
            <FavoriteIcon/>
            <FlashOnIcon/> */} 
            <button id="one">back</button>
            <button id="one">delete</button>
            {/* <button id="one">superlike</button> */}
            <button id="one" onClick={handleLike}>like</button>
            <button id="one">comment</button>
        </div>
    )
}

export default Buttons
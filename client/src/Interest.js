import React from "react";


function Interest({ interest, handleInterestClick }) {
console.log(interest)

    return (
        <div className="hvr-back-pulse" onClick={(event) => handleInterestClick(event, interest)} id="interest">
            <span >{interest.name}</span>


        </div>
    )

}

export default Interest
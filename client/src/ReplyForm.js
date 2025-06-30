
import React from "react";
import { useState } from "react";

function ReplyForm() {

    const [reply, setReply] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        console.log(e)

    }


    return(

        <div id="replyform">
            <form onSubmit={handleSubmit}>
                <input type="text" value={reply} onChange={(e) => setReply(e.target.value)}></input>
                <input type="submit" value="submit"></input>
             </form>
        </div>
    )
}

export default ReplyForm
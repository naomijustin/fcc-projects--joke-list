import React from "react"

export default function Joke (props) {
    return(
    <div style={{margin: "10px 0px", padding: "20px"}}>
        <b>{props.setup}</b><br/>
        <p>{props.punchline}</p>
    </div>
    )
    
}
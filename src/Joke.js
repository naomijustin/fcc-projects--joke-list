import React from "react"

export default function Joke (props) {
    return(
    <div style={{margin: "10px 0px", padding: "20px"}}>
        <b style={{display: props.setup ? "block" : "none"}}>{props.setup}</b>        
        <p>{props.punchline}</p>
        <hr />
    </div>
    )    
}
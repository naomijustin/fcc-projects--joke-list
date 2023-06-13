import React from "react"

export default function Joke (props) {
    return(
    <div style={{margin: "10px 0px", padding: "20px"}}>
        {props.setup && <b>{props.setup}</b>}
        <p>{props.punchline}</p>
        <hr />
    </div>
    )    
}
import React from "react";


function Run(props) {

    return (
        <div key={props.id}><h1>Hello</h1>
            <h1>Hours: {props.hours}</h1>
            <h1>Minutes: {props.minutes}</h1>
            <h1>Seconds: {props.seconds}</h1>
            <h1>Comments: {props.comments}</h1>
        </div>

    )



}

export default Run;
import React from "react";


function Links(props) {
    return (
        <div>
            <h3>Links</h3>
            <p><a href={props.github}>{props.github}</a></p>
            <p><a href={props.linkedin}>{props.linkedin}</a></p>
        </div>
    )
}

export default Links;
import React from 'react'

function Headline(props) {
    function Add(a,b){
        return (a + b );
    }
    return (
        <div>
            <h2>{props.Heading.length} {props.Heading}</h2>
        </div>
    )
}

export default Headline;

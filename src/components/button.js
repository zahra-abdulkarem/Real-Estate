import React from 'react'
function Button(props) {
    return (
        <button className="btn" value={props.image}>{props.children}<span>&#10230;</span></button>
    )
}

export default Button
import React from 'react'
function Button(props) {
    return (
        <button className="btn">{props.children}<span>&#10230;</span></button>
    )
}

export default Button
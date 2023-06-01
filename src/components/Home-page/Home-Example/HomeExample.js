import './sass/HomeExample.css'
import React from 'react'
import formatCurrency from '../../formatCurrency'
const HomeExample = (props) => {
    return (
    <div>
        <div className="example-card" key={props.id}>
        <img src={props.image}   className='home-image' alt={props.alt}/>
            <div className="text">
                <h1>{props.h1}</h1>
                <h3 className="price">{formatCurrency(props.h3)}</h3>
                
                <p><span className='fa-sharp fa-solid fa-location-dot'></span> {props.p}</p>
                <div className='more-info'>5 <i className="fa-solid fa-bed"></i> | 2 <i className="fa-solid fa-toilet"></i></div>
            </div>
        </div>
    </div>
)
}

export default HomeExample

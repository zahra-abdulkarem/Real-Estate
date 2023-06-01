import React from 'react'
import './sass/PrudectCard.css'
import formatCurrency from '../formatCurrency'
const PrudectCard = (props) => {

    return (
        
        <div className='PrudectCard'>
            <img defaultValue={props.image} src={props.image} alt='img'/>
            <p className='go-to-more-details'>see more details <span>&#10230;</span></p>
            <h1>{props.h1}</h1>
            <p>Some sub-addresses and details related to the location of the house.</p>
            <h3 className='price'>{formatCurrency(props.h3)}</h3>
            {/* <div className='more-info'>7 <i className="fa-solid fa-bed"></i> | 3 <i className="fa-solid fa-toilet"></i></div> */}
        </div>
    )
}

export default PrudectCard
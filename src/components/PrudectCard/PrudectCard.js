import React from 'react'
import './sass/PrudectCard.css'
import formatCurrency from '../formatCurrency'
import { Link } from 'react-router-dom'
const PrudectCard = (props) => {
    return (
        <>
            <Link to = { `/MoreDetails/${props.id}`}>
                <div className='PrudectCard'>
                    <img src={props.image} alt='img'/>
                    <p className='go-to-more-details'>read more</p>
                    <h1>{props.h1}</h1>
                    <p>Some sub-addresses and details related to the location of the house.</p>
                    <h3 className='price'>{formatCurrency(props.h3)}</h3>
                </div>
            </Link>
        </>
    )
}

export default PrudectCard
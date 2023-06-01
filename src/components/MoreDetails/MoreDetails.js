import React from 'react'
import './sass/MoreDetails.css'
import formatCurrency from '../formatCurrency'
import { useRef } from 'react'
const MoreDetails = (props) => {


    const MoreDetails = useRef();
    const removeDetails = () => {
        MoreDetails.current.classList.remove("show");
    }
    return (
        <div className='MoreDetails show' ref={MoreDetails}>
            <i className='close-icon fa fa-xmark' onClick={removeDetails}></i>
            <div className='details-container'>
                <img className='image' src={props.image} alt='img'/>
                <div className='details-text'>
                    <h1>{props.h1}</h1>
                    <p>With An Enviable Location At The Front Of The Clock Towers Complex And Overlooking Al Masjid Al Haram And The Holy Kaaba, The 5-Star Al Marwa Rayhaan By Rotana Offers Guests Both Comfort And Convenience During Their Stay And Is An Ideal Base For Visiting Pilgrims. Our Brand Name, Rayhaan, Refers To An Aromatic Plant Mentioned  Makkah.</p>
                    <h3 className='price'>{formatCurrency(props.h3)}</h3>
                    <div className='more-info'>7 <i className="fa-solid fa-bed"></i> | 3 <i className="fa-solid fa-toilet"></i></div>
                    <div className='stars'>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa-solid fa-star-half'></i>
                    </div>
                </div>
            </div>
            <div className='contact-info'>
                <h2>get contact</h2>
                <hr/>
                <div className='contact-options'>
                <i className="fa-regular fa-envelope"><span>info@getcontact.com</span></i>
                <i className="fa-solid fa-phone"><span>+966 04 398 665</span></i>
                <i className="fa-brands fa-twitter"><span>@twitter</span></i>
                <i className="fa-brands fa-facebook"><span>@facebook</span></i>
                </div>
            </div>
        </div>
    )
}

export default MoreDetails
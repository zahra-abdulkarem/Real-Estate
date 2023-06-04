import React from 'react'
import './sass/MoreDetails.css'
import formatCurrency from '../formatCurrency'
import { Link} from 'react-router-dom'
import img from '../../images/About.jpg'
const MoreDetails = () => {
    return (
        <div className='container show'>
        <div className='MoreDetails' >
        <Link to = '/Services'><i className='close-icon fa fa-xmark'></i></Link>
        <div className='details-container'>
                <img className='image' src={img} alt='img'/>
            <div className='details-text'>
                <h1>title</h1>
                <p>With An Enviable Location At The Front Of The Clock Towers Complex And Overlooking Al Masjid Al Haram And The Holy Kaaba, The 5-Star Al Marwa Rayhaan By Rotana Offers Guests Both Comfort And Convenience During Their Stay And Is An Ideal Base For Visiting Pilgrims. Our Brand Name, Rayhaan, Refers To An Aromatic Plant Mentioned  Makkah.</p>
                <h3 className='price'>{formatCurrency(5000)}</h3>
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
            <ul className='contact-options'>
                <li><i className="fa-regular fa-envelope"></i> <span>info@getcontact.com</span></li>
                <li><i className="fa-solid fa-phone"></i> <span>+966 04 398 665</span></li>
                <li><i className="fa-brands fa-twitter"></i> <span>@twitter</span></li>
                <li><i className="fa-brands fa-facebook"></i> <span>@facebook</span></li>
            </ul>
        </div>
    </div>
    </div>
    )
}

export default MoreDetails
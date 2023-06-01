import './sass/Contact.css';
import React from 'react';
import { useRef } from 'react';
function Contact() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("show-info");
    }

    return (
        <React.Fragment>
            <section className="contact">
                <h1 className='title'>Contact</h1>
                <div className='container'>
                <i className='menu-bars fa fa-info' onClick={showNavbar}></i>
                <div className='contact-content'>
                <h4>Send us your name, location, and specifications
                of your dream home, and we will take care of the rest</h4>
                <form>
                    <input type='text' placeholder='Enter Your Name'/>
                    <input type='email' placeholder='Enter Your Email'/>
                    <input type='text' placeholder='Enter Your Location'/>
                    <textarea placeholder='Your Messege'></textarea>
                    <a href='/' className='btn'>send <span>&#10230;</span></a>
                </form>
                </div>

                <div ref={navRef} className='info'>
                    <h4>info</h4>
                    <div className='info-options'>
                        <i className="fa-regular fa-envelope"><span>info@getcontact.com</span></i>
                        <i className="fa-solid fa-phone"><span>+966 50 365 354 365</span></i>
                        <i className="fa-solid fa-city"><span>New York City, 68433</span></i>
                        <i className="fa-regular fa-clock"><span>09.00 - 18.00</span></i>
                    </div>
                </div>
                </div>
            </section>
        </React.Fragment>
        
    );
}

export default Contact;
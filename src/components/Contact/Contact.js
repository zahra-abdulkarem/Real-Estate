import './sass/Contact.css';
import React from 'react';
import { useRef } from 'react';
import Button from '../button';
function Contact() {
    const info = useRef();
    const showInfo = () =>{
        info.current.classList.toggle("show-info");
    }
    return (
        <React.Fragment>
            <section className='Contact'>
                <h1 className='title'>contact</h1>
                <div className='contact-top'>
                    <i className='fa fa-info' onClick={showInfo}></i>
                    <ul className='info' ref={info}>
                        <li><i className="fa-solid fa-envelope"></i> <span>info@getcontact.com</span></li>
                        <li><i className="fa-solid fa-phone"></i> <span>+966 04 398 665</span></li>
                        <li><i className="fa-brands fa-twitter"></i> <span>twitter</span></li>
                        <li><i className="fa-brands fa-facebook"></i> <span>facebook</span></li>
                    </ul>
                </div>

                <form>
                    <input type='text' placeholder=' your name' />
                    <input type='email' placeholder=' your email' />
                    <input type='location' placeholder=' your location' />
                    <textarea placeholder='your massege'></textarea>
                    <Button>send</Button>
                </form>
            </section>
        </React.Fragment>
    );
}

export default Contact;
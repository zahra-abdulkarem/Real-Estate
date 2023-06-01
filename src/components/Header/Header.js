import React from 'react';
import { useRef } from 'react';
import {Link} from 'react-router-dom';
import './sass/Header.css';

function Header() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("active");
    }

    return (
        <React.Fragment>
            <header>
                <i className="logo fa-solid fa-building"></i>
                <nav ref={navRef}>
                    <ul>
                        <li><Link to="/">home</Link></li>
                        
                        <li><Link to="/Services">Services</Link></li>
                        
                        <li><Link to="/AboutUs">about us</Link></li>
                        <li><Link to='/Blogs'>blogs</Link></li>
                        <li><Link to='/Contact'>contact</Link></li>
                        <li><Link to='/PrivacyPolicy'>privacy policy</Link></li>
                    </ul>
                    <i className='close-icon fa fa-xmark' onClick={showNavbar}></i>
                </nav>
                <i className='menu-bars fa fa-bars' onClick={showNavbar}></i>
            </header>
        </React.Fragment>
    );
}

export default Header;
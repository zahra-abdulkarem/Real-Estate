import './sass/Footer.css';
import appStore from '../../images/app-store.png'
import googlePlay from '../../images/play-store.png'
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <footer>
            <div className='footer-container'>
            <div className='box'>
                <h4>Search Options</h4>
                <ul>
                    <li><Link to='/'>Apartments</Link></li>
                    <li><Link to='/Villa'>Villa</Link></li>
                    <li><Link to='/'>Radhi Role</Link></li>
                </ul>
            </div>
            <div className='box'>
                <h4>Quick Links</h4>
                <ul>
                    <li><a href='/'>Add An Advertisement</a></li>
                    <li><a href='/'>Payment Of Fees</a></li>
                    <li><Link to='/Blogs'>Blogs</Link></li>
                    <li><Link to='/Contact'>call us</Link></li>
                </ul>
            </div>
            <div className='box'>
                <h4>Information</h4>
                <ul>
                    <li><Link to='/AboutUs'>Who Are We</Link></li>
                    <li><Link to='/PrivacyPolicy'>Privacy Policy</Link></li>
                    <li><a href='/'>Terms And Conditions</a></li>
                </ul>
            </div>
            <div className='box'>
                <h4>Download The Application Now</h4>
                <ul>
                    <img src={appStore} alt="appStore"/>
                    <img src={googlePlay} alt="googlePlay"/>
                </ul>
            </div>
            </div>
            <div className='Copyright'>Copyright © 2023 Design-By: Zahra Abdulkarem</div>
        </footer>
    );
}

export default Footer;
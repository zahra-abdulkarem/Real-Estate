import './sass/Services.css'
import {Buy} from '../exports'
import {Link} from 'react-router-dom';
function Services() {
return (
    <div className='Services'> 
    <h1 className='title'>Services</h1>
    <h4>Search Options</h4>
    <div className='options'>
        <Link to='/Buy' className='services-btn'>buy</Link>
        <Link to='/Rent' className='services-btn'>rent</Link>
        <Link to='/Buy' className='services-btn'>sell</Link>
        <Link to='/Villa' className='services-btn'>villa</Link>
        <Link to='/Apartments' className='services-btn'>Apartments</Link>
        <Link to='/NewProjects' className='services-btn'>New projects</Link>
    </div>
    <Buy/>
    </div>
);
};

export default Services

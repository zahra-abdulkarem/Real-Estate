import React from 'react'
import img1 from '../../../images/buy/villa-1.jpg'
import img2 from '../../../images/blogs/villa-8.jpg'
import img3 from '../../../images/buy/bulding-1.jpg'
import './sass/NewProjects.css'
const NewProjects = () => {
    return (
        <div className='new-projects'>
            <h1 className='title'>Projects</h1>
            <h6>Projects To Be Created</h6>
            <div className='project-cards'>
                <div className='card'>
                    <img src={img1} alt='img-1'/>
                    <h4>Project Title</h4>
                    <h5><i className="fa-solid fa-map-location-dot"></i> Strategic Location</h5>
                    <p>The New Housing Project</p>
                    <h5><i className="fa-solid fa-location-dot"></i> New York City, 24583 Street</h5>
                    <button className='btn'>learn more <span>&#10230;</span></button>
                </div>

                <div className='card'>
                    <img src={img2} alt='img-2'/>
                    <h4>Project Title</h4>
                    <h5><i className="fa-solid fa-map-location-dot"></i> Strategic Location</h5>
                    <p>The New Housing Project</p>
                    <h5><i className="fa-solid fa-location-dot"></i> New York City, 24583 Street</h5>
                    <button className='btn'>learn more <span>&#10230;</span></button>
                </div>

                <div className='card'>
                    <img src={img3} alt='img-3'/>
                    <h4>Project Title</h4>
                    <h5><i className="fa-solid fa-map-location-dot"></i> Strategic Location</h5>
                    <p>The New Housing Project</p>
                    <h5><i className="fa-solid fa-location-dot"></i> New York City, 24583 Street</h5>
                    <button className='btn'>learn more <span>&#10230;</span></button>
                </div>
            </div>
        </div>
    )
}

export default NewProjects
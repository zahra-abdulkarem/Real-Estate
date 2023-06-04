import React from 'react'
import './sass/AboutUs.css'
import aboutImage1 from '../../images/About.jpg'
import aboutImage2 from '../../images/About-2.jpg'
import aboutImage3 from '../../images/About-3.jpg'
import Button from '../button'
function AboutUs() {
    return (
        <>
            <section className='AboutUs'>
                <h1 className='title'>about</h1>

                <div className='media'>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-facebook"></i>
                </div>

                <div className='about-container'>
                    <div className='content'>
                        <div className='image'><img src={aboutImage1} alt='aboutPhoto'/></div>
                        <div className='text'>
                            <h2>What Are Types of Real Estate?</h2>
                            <p>Residential real estate: Any property used for residential purposes. Examples include single-family homes, condos, cooperatives, duplexes, townhouses, and multifamily residences.</p>
                            <p>Commercial real estate: Any property used exclusively for business purposes, such as apartment complexes, gas stations, grocery stores, hospitals, hotels, offices, parking facilities, restaurants, shopping centers, stores, and theaters.</p>
                        </div>
                        
                    </div>
                    <div className='content'>
                    <div className='text'>
                            <h2>Understanding Real Estate</h2>
                            <p>What Is Real Estate? Real estate is defined as the land and any permanent structures, like a home, or improvements attached to the land, whether natural or man-made.Real estate is a form of reaproperty. It differs from personal property, which is not permanently attached to the land, such as vehicles, boats, jewelry, furniture, and farm equipment.</p>
                            <p>Understanding Real Estate The terms land, real estate, and real property are often used interchangeably, but there are distinctions. Land refers to the earth's surface down to the center of the earth and upward to the airspace above, including the trees, minerals, and water. The physical characteristics of land include its immobility, indestructibility, and uniqueness, where each parcel of land differs geographically.</p>
                            <Button>read more</Button>
                        </div>
                        
                        <div className='image'><img src={aboutImage2} alt='aboutPhotoTwo'/></div>
                    </div>
                    <div className='content'>
                        <div className='image'><img src={aboutImage3} alt='aboutPhotoThree'/></div>
                        <div className='text'>
                            <h2>The Economics of Real Estate</h2>
                            <p>Real estate is a critical driver of economic growth in the U.S., and housing starts, the number of new residential construction projects in any given month, released by the U.S. Census Bureau, is a key economic indicator. The report includes building permits, housing starts, and housing completions data, for single-family homes, homes with 2-4 units, and multifamily buildings with five or more units, such as apartment complexes</p>
                            <p>Investors and analysts keep a close eye on housing starts because the numbers can provide a general sense of economic direction. Moreover, the types of new housing starts can give clues about how the economy is developing.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs
import React from 'react'
import {PrudectCard} from '../../exports'
import card from '../../../Data/buyCardData'
import './sass/Buy.css'
import { useState, useRef } from 'react'


const Buy = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const searchInput = useRef();
    return (
        <React.Fragment>
            <div hrfe="/Buy" className='Buy'>
                <div className='buy-container'>
                    <div className='input-form'>
                        <input  type='text'  id="search-filter" ref={searchInput} placeholder="search here..." onChange={(event) => {
                            setSearchTerm(event.target.value);
                        }}/>
                        <i className="fa-solid fa-magnifying-glass"><span>search</span></i>
                    </div>
                    <div className='button-place'>
                        <button id="title" className='btn'>search by title <span>&#10230;</span></button>

                        <button id="price" className='btn'>search by price <span>&#10230;</span></button>
                    </div>
                    <div className='buy-cards'>
                        {
                            card.filter((val) => {
                                if(searchTerm === ""){
                                    return val;
                                }else if(val.h1.toLowerCase().includes(searchTerm.toLowerCase())){
                                    return val;
                                }else if(val.h3.includes(searchTerm)){
                                    return val;
                                }
                            }).map(exampleCard => {
                                return <PrudectCard {...exampleCard}
                                key={exampleCard.id}
                                />
                            })
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Buy

import React from 'react'
import {PrudectCard} from '../../exports'
import rentData from '../../../Data/RentCardData'
import { useState } from 'react'
import './sass/Rent.css'


const Rent = () => {
    const [data, setData] = useState(rentData);
    const handleFilter = (e)=>{
        let filterMood=e.target.value;
        if(filterMood === "all"){
            setData(rentData);
        }else if(filterMood === "high"){
            const filtered = rentData.filter(item=> item.h3 >= "500000");
            setData(filtered);
        }else if(filterMood === "low"){
            const filtered = rentData.filter(item=> item.h3 < "500000");
            setData(filtered);
        }
    }

    
    return (
        <React.Fragment>
            <div className='Rent'>
                <h1 className='title'>Rent</h1>
                <div className='search-optione'>
                <button value="high" onClick={handleFilter}  className='services-btn'>the highest price</button>
                <button value="low" onClick={handleFilter}  className='services-btn'>the lowest price</button>
                <button value="all" onClick={handleFilter} className='services-btn'>show all</button>
                </div>
                <div className='rent-cards'>
                    {
                        data.map(exampleCard => {
                            return <PrudectCard {...exampleCard} key={exampleCard.id}/>
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default Rent

import React from 'react'
import {PrudectCard} from '../../exports'
import villaCard from '../../../Data/VillaData'
import './sass/Villa.css'

const Villa = () => {
    const example = villaCard.map(exampleCard => {
    return <PrudectCard
    key={exampleCard.id} 
    image={exampleCard.image} 
    h1={exampleCard.h1} 
    h3={exampleCard.h3}
    p={exampleCard.p}/>
    })
    return (
        <React.Fragment>
            <div className='Villa'>
                <h1 className='title'>villa</h1>
                <div className='Villa-container'>
                    <div className='Villa-cards'>
                        {example}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Villa
import React from 'react'
import {PrudectCard} from '../../exports'
import {villaData} from '../../../Data/prudectsData'

const Villa = () => {
    const example = villaData.map(exampleCard => {
    return <PrudectCard
    key={exampleCard.id} 
    image={exampleCard.image} 
    h1={exampleCard.h1} 
    h3={exampleCard.h3}
    p={exampleCard.p}/>
    })
    return (
        <React.Fragment>
            <div className='villa'>
                <h1 className='title'>villa</h1>
                <div className='prudect-Cards-Container'>
                        {example}
                    </div>
            </div>
        </React.Fragment>
    )
}

export default Villa
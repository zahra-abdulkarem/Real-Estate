import React from 'react'
import {apartmentData} from '../../../Data/prudectsData'
import {PrudectCard} from '../../exports'
function Apartments() {
    return (
        <React.Fragment>
            <div className='Apartments'>
                <h1 className='title'>Apartments</h1>
                <div className='prudect-Cards-Container'>
                        {
                        apartmentData.map(exampleCard => {
                            return <PrudectCard {...exampleCard} key={exampleCard.id} /> 
                        })}
                    </div>
            </div>
        </React.Fragment>
    )
}

export default Apartments
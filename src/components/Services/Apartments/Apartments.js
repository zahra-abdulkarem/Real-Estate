import React from 'react'
import './sass/Apartments.css'
import apartmentsData from '../../../Data/ApartmentsData'
import {PrudectCard} from '../../exports'
function Apartments() {
    return (
        <React.Fragment>
            <div className='Apartments'>
                <h1 className='title'>Apartments</h1>
                <div className='Apartments-container'>
                    <div className='Apartments-cards'>
                        {
                            apartmentsData.map(exampleCard => {
                                return <PrudectCard
                                {...exampleCard}
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

export default Apartments
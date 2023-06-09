import './sass/HomeContent.css';
import homeData from '../../Data/homeExampleData'
import {AboutUs, Button, HomeExample} from '../exports'
import { Link } from 'react-router-dom';
function HomeContent() {
    const examples = homeData.map(card => {
        return <HomeExample key={card.id} {...card}/>
    })
    return (
        <>
            <div className="HomeContent">
                <h1>Find Your New Home</h1>
                <p>Looking for a house for sale or for rent alike</p>
                <Link to="/Services"><Button>get started</Button></Link>
            </div>
            <AboutUs/>
            <section className='house-examples'>
                {examples}
            </section>
        </>
    );
}

export default HomeContent;
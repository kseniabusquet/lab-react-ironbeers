import {Link} from 'react-router-dom'
import beers from '../assets/beers.png'
import newBeer from '../assets/new-beer.png'
import randomBeer from '../assets/random-beer.png'
import "./HomePage.css"


const HomePage = () => {
    
    
    return (
        <div className='all-beers-container'>
            <div className='section-wrapper'>
            <Link to ='/beers'>
                <img src = {beers} alt = 'all beers' />
                <h1>All Beers</h1>

            </Link>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipis</p>
            </div>

            <div className='section-wrapper'>
            <Link to ='/random-beer'>
            <img src = {randomBeer} alt = 'random beer'/>
                <h1>Random Beer</h1>
            </Link>

            <p>Lorem ipsum dolor sit amet, consectetur adipis</p>
            </div>

            <div className='section-wrapper'>
            <Link to ='/new-beer'>
            <img src = {newBeer} alt = 'new beer'/>
                <h1>New Beer</h1>
            </Link>
            

            <p>Lorem ipsum dolor sit amet, consectetur adipis</p>
            </div>
        </div>
    )
}

export default HomePage
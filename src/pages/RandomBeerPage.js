import Header from '../components/Header';
import {useEffect, useState} from 'react'
import axios from 'axios'
import './BeerDetailsPage.css'
import BeerInfo from '../components/BeerInfo';

const RandomBeerPage = () => {
    const [beer, setBeer] = useState([])
    
    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then(response => setBeer(response.data))
        .catch((error) => console.log(error))
    }, [])
    
        return (
            <div>
            <Header />
            <BeerInfo beer = {beer} />
            </div>
        )
}

export default RandomBeerPage
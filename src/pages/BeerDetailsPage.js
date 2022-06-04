import Header from '../components/Header';
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import './BeerDetailsPage.css'

const BeerDetailsPage = () => {

const [beer, setBeer] = useState([])
const {beerId} = useParams()

useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
    .then(response => setBeer(response.data))
    .catch((error) => console.log(error))
}, [beerId])

    return (
    <div>
        <Header />
        
        <div className = 'beer-details-wrapper'>
            
            <img src = {beer.image_url} alt = 'beer-label'/>
            
            <div className = "details-flex-wrapper">
                <h2>{beer.name}</h2>
                <h4>{beer.attenuation_level}</h4>
            </div>

            <div classNamme = 'details-flex-wrapper'>
                <h3>{beer.tagline}</h3>
                <h4>{beer.first_brewed}</h4>
            </div>

            <p>{beer.description}</p>
            <h5>{beer.contributed_by}</h5>
        </div>
    </div>
    )
}

export default BeerDetailsPage
import axios from 'axios';
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import Header from '../components/Header';
import './AllBeersPage.css'

const AllBeersPage = () => {

const [beers, setBeers] = useState([])

useEffect(() => {
  axios.get('https://ih-beers-api2.herokuapp.com/beers')
    .then(response => {
      setBeers(response.data)
    })
    .catch(error => {console.log(error)})
}, [])

return (
    <div>
        <Header />

        {beers && beers.map(beer => {
            return (
            <Link to = {beer._id} key = {beer._id}className = 'flex'>
                <div className = 'image-wrapper'>
                <img src = {beer.image_url} alt = 'beer label'/>
                </div>

                <div className = 'text-wrapper'>
                    <h2>{beer.name}</h2>
                    <h3 className = 'tagline'>{beer.tagline}</h3>
                    <p><b>Created by: </b>{beer.contributed_by} </p>
                </div>
            </Link>
            )
        })}
    </div>
    )
}

export default AllBeersPage

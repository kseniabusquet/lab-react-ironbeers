import axios from 'axios';
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import Header from '../components/Header';

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
            <h1></h1>
        })}
    </div>
    )
}

export default AllBeersPage

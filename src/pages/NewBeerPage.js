import Header from '../components/Header';
import {useState} from 'react'
import './NewBeerPage.css'
import axios from 'axios';
import Button from 'react-bootstrap/Button';


const NewBeerPage = () => {

    const [headline, setHeadline] = useState('')
    const [tagline, setTagline] = useState('')
    const [description, setDescription] = useState('')
    const [firstBrewed, setFirstBrewed] = useState('')
    const [brewerTips, setBrewerTips] = useState('')
    const [attentuationLevel, setAttentuationLevel] = useState(0)
    const [contributor, setContributor] = useState('')


    function handleSubmit (e) {
        e.preventDefault()

        const body ={
            name: headline,
            tagline: tagline,
            description: description,
            first_brewed: firstBrewed,
            brewers_tips: brewerTips,
            attentuation_level: attentuationLevel,
            contributed_by: contributor
        }

        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', body)
            .then(response => {
                    setHeadline()
                    setTagline()
                    setDescription()
                    setFirstBrewed()
                    setBrewerTips()
                    setAttentuationLevel()
                    setContributor()
                    alert('Request completed')

                    //reload the page after succesfull submission
                    setTimeout(
                    window.location.reload(), 1000
                    )
            })

            .catch((error) => console.log(error))
    }

    return (
        <div>
            <Header />
            <div className = 'new-beer-container'>
            <h3>Add new beer</h3>
            <form onSubmit={handleSubmit}>
                <div><label>Beer name:</label>
                <input 
                    type = 'text'
                    name = 'Beer name:'
                    value = {headline}
                    onChange = {(e) => setHeadline(e.target.value)}/>
                </div>

                <div>
                <label>Tagline:</label>
                <input 
                    type = 'text'
                    name = 'Tagline:'
                    value = {tagline}
                    onChange = {(e) => setTagline(e.target.value)}/>
                </div>

                <div>
                <label>Description:</label>
                <input 
                    type = 'text'
                    name = 'Description:'
                    value = {description}
                    onChange = {(e) => setDescription(e.target.value)}/>
                </div>

                <div>
                <label>First brewed:</label>
                <input 
                    type = 'text'
                    name = 'First brewed:'
                    value = {firstBrewed}
                    onChange = {(e) => setFirstBrewed(e.target.value)}/>
                </div>

                <div>
                <label>Brewer tips:</label>
                <input 
                    type = 'text'
                    name = 'Brewer tips'
                    value = {brewerTips}
                    onChange = {(e) => setBrewerTips(e.target.value)}/>
                </div>

                <div>
                <label>Attentuation level:</label>
                <input 
                    type = 'number'
                    name = 'Attentuation level:'
                    value = {attentuationLevel}
                    onChange = {(e) => setAttentuationLevel(e.target.value)}/>
                </div>

                <div>
                <label>Contributed by:</label>
                <input 
                    type = 'text'
                    name = 'Contributed by:'
                    value = {contributor}
                    onChange = {(e) => setContributor(e.target.value)}/>
                </div>

                <div className="btn-container">
                    <Button type="submit" variant = 'primary' size = 'lg'>Submit</Button>
                </div>
            </form>
        </div>
        </div>
    )
}

export  default NewBeerPage
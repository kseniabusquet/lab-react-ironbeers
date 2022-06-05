const BeerInfo = (props) => {

const {beer} = props

return(

<div className = 'beer-details-wrapper'>
    
    <img src = {beer.image_url} alt = 'beer-label'/>
        <div className = "details-flex-wrapper">
            <h2>{beer.name}</h2>
            <h4 className = 'grey-text'>{beer.attenuation_level}</h4>
        </div>

    <div className = "details-flex-wrapper">
        <h3 className="grey-text">{beer.tagline}</h3>
        <h4 className="bold-text">{beer.first_brewed}</h4>
    </div>

    <p>{beer.description}</p>
    <h5 className = "grey-text">{beer.contributed_by}</h5>
</div>
 )
}

export default BeerInfo
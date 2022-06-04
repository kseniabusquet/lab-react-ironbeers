const BeerInfo = (props) => {

const {beer} = props

return(

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
 )
}

export default BeerInfo
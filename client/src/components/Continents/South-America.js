import saData from "../../data/south-america.json"
import { Link } from "react-router-dom"
import "./Continents.css"
import Autocomplete from "react-google-autocomplete";

const SaList = (props) => {
    let min = Math.ceil(400)
    let max = Math.floor(600)
    const randomInteger = Math.floor(Math.random() * (max - min) + min)
    return (
        <div className="continent_item">
            <img className="continent_img" src={"https://placeimg.com/" + randomInteger + "/" + randomInteger + "/nature"} alt="random nature" />
            <Link className="continent_link" to={"/" + props.country.name}><h3 className="continent_link">{props.country.name}</h3></Link>
        </div>
    )
}


const SAmerica = () => {
    const saList = saData.map((country) => {
        return (
            <SaList country={country} key={country._id} />
        )
    })
    return (
        <div className="all_continents">
            <h1>South America</h1>
            <p className="continent_desc">Andean peaks, Amazonian rainforest, Patagonian glaciers, Incan ruins, white-sand beaches and vertiginous nightlife: the wonders of South America set the stage for incredible adventures.</p>
            <div className="continent_container">
                {saList}
            </div>
        </div>
    )
}

export default SAmerica
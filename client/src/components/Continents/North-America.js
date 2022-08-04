import naData from "../../data/north-america-data.json"
import { Link } from "react-router-dom"
import "./Continents.css"
import Autocomplete from "react-google-autocomplete";

const NaList = (props) => {
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


const NAmerica = () => {
    const naList = naData.map((country) => {
        return (
            <NaList country={country} key={country._id} />
        )
    })
    return (
        <div className="all_continents">
            <h1>North America</h1>
            <p>The heart of North America beats through towering forests, undulating fields, high-plain deserts, pulsating metropolises and offbeat oases.</p>
            <div>
            <Autocomplete
              apiKey={process.env.REACT_APP_GOOGLE_API}
              onPlaceSelected={(place) => {
                console.log(place.formatted_address);
              }}
              placeholder="Search for a country"
            />
            </div>
            <div className="continent_container">
                {naList}
            </div>
        </div>
    )
}

export default NAmerica
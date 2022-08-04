import { Link } from 'react-router-dom'
import { useState } from 'react'
import "./Countries.css"
import Autocomplete from "react-google-autocomplete";

const CountryCard = (props) => {
    let min = Math.ceil(400)
    let max = Math.floor(600)
    const randomInteger = Math.floor(Math.random() * (max - min) + min)

    return (
        <div className="countries_item">
            <img className="countries_img" src={"https://placeimg.com/" + randomInteger + "/" + randomInteger + "/arch"} alt="random architecture" />
            <Link className="countries_link" to={"/countries/" + props.country.name}><h3 className="countries_link">{props.country.name}</h3></Link>
        </div>
    )
}


const Countries = (props) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const countryItems = props.data.map((country) => {
        return (
            <CountryCard country={country} />
        )
    })
    return (
        <div >
            <h1 className="all_countries">All Countries</h1>
            <div>


                {/* <Autocomplete
              apiKey={process.env.REACT_APP_GOOGLE_API}
              onPlaceSelected={(place) => {
                console.log(place.formatted_address);
              }}
              placeholder="Search for a country"
            />  */}
             </div>
            <div className="countries_container">
            {countryItems}  
            </div>
        </div>
    )
}

export default Countries
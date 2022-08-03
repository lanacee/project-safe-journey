import { Link } from 'react-router-dom'
import "./Countries.css"

const CountryCard = (props) => {
    let min = Math.ceil(400)
    let max = Math.floor(600)
    const randomInteger = Math.floor(Math.random() * (max - min) + min)

    return (
        <div className="countries_item">
            <img className="countries_img" src={"https://placeimg.com/"+randomInteger+"/"+randomInteger+"/arch"} alt="random architecture" />
            <Link className="countries_link" to={"/"+props.country.name}><h3 className="countries_link">{props.country.name}</h3></Link>
        </div>
    )
}


const Countries = (props) => {
    const countryItems = props.data.map((country) => {
        return (
            <CountryCard country={country} />
        )
    })
    return (
        <div >
            <h1 className="all_countries">All Countries</h1>
            <div className="countries_container">
            {countryItems}
            </div>
        </div>
    )
}

export default Countries
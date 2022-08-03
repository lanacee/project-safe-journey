import oceData from "../../data/oceania-data.json"
import { Link } from 'react-router-dom'

const OceList = (props) => {
    const randomInteger = Math.floor(Math.random() * 600)
    return (
        <div className="continent_item">
            <img className="continent_img" src={"https://placeimg.com/" + randomInteger + "/" + randomInteger + "/nature"} alt="random nature" />
            <Link className="continent_link" to={"/" + props.country.name}><h3 className="continent_link">{props.country.name}</h3></Link>
        </div>
    )
}


const Oceania = () => {
    const oceList = oceData.map((country) => {
        return (
            <OceList country={country} key={country._id} />
        )
    })
    return (
        <div className="all_continents">
            <h1>Oceania</h1>
            <div className="countries_container">
                {oceList}
            </div>
        </div>
    )
}

export default Oceania
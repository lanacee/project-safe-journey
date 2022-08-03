import saData from "../../data/south-america.json"
import { Link } from "react-router-dom"
import "./Continents.css"

const SaList = (props) => {
    const randomInteger = Math.floor(Math.random() * 600)
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
            <div className="continent_container">
                {saList}
            </div>
        </div>
    )
}

export default SAmerica
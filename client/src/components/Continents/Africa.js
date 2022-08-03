import africaData from "../../data/africa-data.json"
import { Link } from "react-router-dom"
import "./Continents.css"

const AfricaList = (props) => {
    const randomInteger = Math.floor(Math.random() * 600)
    return (
        <div className="continent_item">
            <img className="continent_img" src={"https://placeimg.com/" + randomInteger + "/" + randomInteger + "/nature"} alt="random nature" />
            <Link className="continent_link" to={"/" + props.country.name}><h3 className="continent_link">{props.country.name}</h3></Link>
        </div>
    )
}


const Africa = () => {
    const africaList = africaData.map((country) => {
        return (
            <AfricaList country={country} key={country._id} />
        )
    })
    return (
        <div className="all_continents">
            <h1>Africa</h1>
            <div className="continent_container">
                {africaList}
            </div>
        </div>
    )
}

export default Africa
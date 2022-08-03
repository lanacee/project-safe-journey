import oceData from "../../data/oceania-data.json"
import { Link } from "react-router-dom"
import "./Continents.css"

const OceList = (props) => {
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


const Oceania = () => {
    const oceList = oceData.map((country) => {
        return (
            <OceList country={country} key={country._id} />
        )
    })
    return (
        <div className="all_continents">
            <h1>Oceania</h1>
            <div className="continent_container">
                {oceList}
            </div>
        </div>
    )
}

export default Oceania
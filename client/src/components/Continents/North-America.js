import naData from "../../data/north-america-data.json"
import { Link } from 'react-router-dom'

const NaList = (props) => {
    const randomInteger = Math.floor(Math.random() * 600)
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
            <div className="countries_container">
                {naList}
            </div>
        </div>
    )
}

export default NAmerica
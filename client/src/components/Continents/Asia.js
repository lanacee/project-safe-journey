import asiaData from "../../data/asia-data.json"
import { Link } from 'react-router-dom'

const AsiaList = (props) => {
    const randomInteger = Math.floor(Math.random() * 600)
    return (
        <div className="continent_item">
            <img className="continent_img" src={"https://placeimg.com/" + randomInteger + "/" + randomInteger + "/nature"} alt="random nature" />
            <Link className="continent_link" to={"/" + props.country.name}><h3 className="continent_link">{props.country.name}</h3></Link>
        </div>
    )
}


const Asia = () => {
    const asiaList = asiaData.map((country) => {
        return (
            <AsiaList country={country} key={country._id} />
        )
    })
    return (
        <div className="all_continents">
            <h1>Asia</h1>
            <div className="countries_container">
                {asiaList}
            </div>
        </div>
    )
}

export default Asia
import africaData from "../../data/africa-data.json";
import { Link } from "react-router-dom";
import { useState } from "react";
import Select from "react-select";
import "./Continents.css";

const AfricaList = (props) => {
    let min = Math.ceil(400);
    let max = Math.floor(600);
    const randomInteger = Math.floor(Math.random() * (max - min) + min);
    return (
        <div className="continent_item">
            <img
                className="continent_img"
                src={
                    "https://placeimg.com/" +
                    randomInteger +
                    "/" +
                    randomInteger +
                    "/nature"
                }
                alt="random nature"
            />
            <Link className="continent_link" to={"/" + props.country.name}>
                <h3 className="continent_link">{props.country.name}</h3>
            </Link>
        </div>
    );
};

const Africa = () => {
    const [country, setCountry] = useState(null);
    const handleSelect = ({ value }) => {
        setCountry({ name: value });
    };
    const options = africaData.map((country) => {
        return { label: country.name, value: country.name };
    });
    const africaList = africaData.map((country) => {
        return <AfricaList country={country} key={country._id} />;
    });
    return (
        <div className="all_continents">
            <h1>Africa</h1>
            <p className="continent_desc">
                Africa. There's nowhere like it on the planet for wildlife, wild lands
                and rich traditions that endure. Prepare to fall in love.
            </p>
            <Select
                options={options}
                name="country"
                placeholder="Choose your country"
                isSearchable
                onChange={handleSelect}
            />
            <div className="continent_container">
                {country ? <africaList country={country} key={country._id} /> : africaList}
            </div>
        </div>
    );
};

export default Africa;

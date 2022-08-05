import saData from "../../data/south-america.json";
import { Link } from "react-router-dom";
import { useState } from "react";
import Select from "react-select";
import "./Continents.css";

const SaCountries = (props) => {
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
            <Link className="continent_link" to={"/countries/" + props.country.name}>
                <h3 className="continent_link">{props.country.name}</h3>
            </Link>
        </div>
    );
};

const SAmerica = () => {
    const [country, setCountry] = useState(null);
    const handleSelect = ({ value }) => {
        setCountry({ name: value });
    };
    const options = saData.map((country) => {
        return { label: country.name, value: country.name };
      });
    const SaList = saData.map((country) => {
        return <SaCountries country={country} key={country._id} />;
    });
    return (
        <div className="all_continents">
            <h1>South America</h1>
            <p className="continent_desc">
                Andean peaks, Amazonian rainforest, Patagonian glaciers, Incan ruins,
                white-sand beaches and vertiginous nightlife: the wonders of South
                America set the stage for incredible adventures.
            </p>
            <Select
                options={options}
                name="country"
                placeholder="Choose your country"
                isSearchable
                onChange={handleSelect}
            />
            <div className="continent_container">
                {country ? <SaCountries country={country} key={country._id} /> : SaList}
            </div>
        </div>
    );
};

export default SAmerica;

<h1 className="all_countries">All Countries</h1>



    
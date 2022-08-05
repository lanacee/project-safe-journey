import oceData from "../../data/oceania-data.json";
import { Link } from "react-router-dom";
import { useState } from "react";
import Select from "react-select";
import "./Continents.css";

const OceCountries = (props) => {
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

const Oceania = () => {
    const [country, setCountry] = useState(null);
    const handleSelect = ({ value }) => {
        setCountry({ name: value });
    };
    const options = oceData.map((country) => {
        return { label: country.name, value: country.name };
    });
    const OceList = oceData.map((country) => {
        return <OceCountries country={country} key={country._id} />;
    });
    return (
        <div className="all_continents">
            <h1>Oceania</h1>
            <p className="continent_desc">
                Australia and New Zealand’s medley of mountains, deserts, reefs,
                forests, beaches and multicultural cities are an eternal draw for
                travellers. Remote, beautiful and friendly, the Pacific islands’ white
                sands and clear waters are almost dreamlike in their perfection.
            </p>
            <Select
                options={options}
                name="country"
                placeholder="Choose your country"
                isSearchable
                onChange={handleSelect}
            />
            <div className="continent_container">
                {country ? <OceCountries country={country} key={country._id} /> : OceList}
            </div>
        </div>
    );
};

export default Oceania;

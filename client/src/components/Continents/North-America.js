import naData from "../../data/north-america-data.json";
import { Link } from "react-router-dom";
import { useState } from "react";
import Select from "react-select";
import "./Continents.css";

const NaList = (props) => {
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

const NAmerica = () => {
    const [country, setCountry] = useState(null);
    const handleSelect = ({ value }) => {
        setCountry({ name: value });
    };
    const options = naData.map((country) => {
        return { label: country.name, value: country.name };
    });
  const naList = naData.map((country) => {
    return <NaList country={country} key={country._id} />;
  });
  return (
    <div className="all_continents">
      <h1>North America</h1>
      <p className="continent_desc">
        The heart of North America beats through towering forests, undulating
        fields, high-plain deserts, pulsating metropolises and offbeat oases.
      </p>
      <Select
                options={options}
                name="country"
                placeholder="Choose your country"
                isSearchable
                onChange={handleSelect}
            />
            <div className="continent_container">
                {country ? <naList country={country} key={country._id} /> : naList}
            </div>
    </div>
  );
};

export default NAmerica;

import { Link } from "react-router-dom";
import "./Countries.css";
import Select from "react-select";
import countries from "../data/countries-data.json";
import { useState } from "react";

const CountryCard = (props) => {
  let min = Math.ceil(400);
  let max = Math.floor(600);
  const randomInteger = Math.floor(Math.random() * (max - min) + min);

  return (
    <div className="countries_item">
      <img
        className="countries_img"
        src={
          "https://placeimg.com/" +
          randomInteger +
          "/" +
          randomInteger +
          "/arch"
        }
        alt="random architecture"
      />
      <Link className="countries_link" to={"/countries/" + props.country.name}>
        <h3 className="countries_link">{props.country.name}</h3>
      </Link>
    </div>
  );
};

const options = countries.map((country) => {
  return { label: country.name, value: country.name };
});

const Countries = (props) => {
  const [country, setCountry] = useState(null);
  const countryItems = props.data.map((country) => {
    return <CountryCard country={country} />;
  });

  const handleSelect = ({ value }) => {
    setCountry({ name: value });
  };

  return (
    <div>
      <h1 className="all_countries">All Countries</h1>
      <Select
        options={options}
        name="country"
        placeholder="Choose your country"
        isSearchable
        onChange={handleSelect}
      />
      <div className="countries_container">
        {country ? <CountryCard country={country} /> : countryItems}
      </div>
    </div>
  );
};

export default Countries;

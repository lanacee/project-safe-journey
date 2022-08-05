import asiaData from "../../data/asia-data.json";
import { Link } from "react-router-dom";
import { useState } from "react";
import Select from "react-select";
import "./Continents.css";

const AsiaCountries = (props) => {
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

const Asia = () => {
  const [country, setCountry] = useState(null);
  const handleSelect = ({ value }) => {
    setCountry({ name: value });
  };
  const options = asiaData.map((country) => {
    return { label: country.name, value: country.name };
  });
  const AsiaList = asiaData.map((country) => {
    return <AsiaCountries country={country} key={country._id} />;
  });
  return (
    <div className="all_continents">
      <Link to="/">←Back</Link>
      <h1>Asia</h1>
      <p className="continent_desc">
        From the nomadic steppes of Kazakhstan to the frenetic streets of Hanoi,
        Asia is a continent so full of intrigue, adventure, solace and
        spirituality that it has fixated and confounded travellers for
        centuries.
      </p>
      <Select
        options={options}
        name="country"
        placeholder="Choose your country"
        isSearchable
        onChange={handleSelect}
      />
      <div className="continent_container">
        {country ? (
          <AsiaCountries country={country} key={country._id} />
        ) : (
          AsiaList
        )}
      </div>
    </div>
  );
};

export default Asia;

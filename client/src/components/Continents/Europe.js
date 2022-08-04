import euroData from "../../data/europe-data.json";
import { Link } from "react-router-dom";
import { useState } from "react";
import Select from "react-select";
import "./Continents.css";

const EuroList = (props) => {
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

const Europe = () => {
    const [country, setCountry] = useState(null);
    const handleSelect = ({ value }) => {
        setCountry({ name: value });
    };
    const options = euroData.map((country) => {
        return { label: country.name, value: country.name };
    });
  const euroList = euroData.map((country) => {
    return <EuroList country={country} key={country._id} />;
  });
  return (
    <div className="all_continents">
      <h1>Europe</h1>
      <p className="continent_desc">
        There simply is no way to tour Europe and not be awestruck by its
        natural beauty, epic history and dazzling artistic and culinary
        diversity.
      </p>
      <Select
                options={options}
                name="country"
                placeholder="Choose your country"
                isSearchable
                onChange={handleSelect}
            />
            <div className="continent_container">
                {country ? <euroList country={country} key={country._id} /> : euroList}
            </div>
    </div>
  );
};

export default Europe;

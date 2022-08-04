import asiaData from "../../data/asia-data.json";
import { Link } from "react-router-dom";
import "./Continents.css";

const AsiaList = (props) => {
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

const Asia = () => {
  const asiaList = asiaData.map((country) => {
    return <AsiaList country={country} key={country._id} />;
  });
  return (
    <div className="all_continents">
      <h1>Asia</h1>
      <p className="continent_desc">
        From the nomadic steppes of Kazakhstan to the frenetic streets of Hanoi,
        Asia is a continent so full of intrigue, adventure, solace and
        spirituality that it has fixated and confounded travellers for
        centuries.
      </p>
      <div className="continent_container">{asiaList}</div>
    </div>
  );
};

export default Asia;

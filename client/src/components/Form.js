import Autocomplete from "react-google-autocomplete";
import { useEffect, useState } from "react";
import "./Form.css";

const Ratings = ({ name, handleChange, value }) => {
  return (
    <div className="rating-group">
      <input
        onChange={handleChange}
        disabled
        checked={value === "0"}
        className="rating__input rating__input--none"
        name={name}
        htmlFor={`rating-${name}-none`}
        value="0"
        type="radio"
      />
      <label
        aria-label="1 star"
        className="rating__label"
        htmlFor={`rating-${name}-1`}
      >
        <span className="rating__icon rating__icon--star">★</span>
      </label>
      <input
        onChange={handleChange}
        className="rating__input"
        name={name}
        checked={value === "1"}
        id={`rating-${name}-1`}
        value="1"
        type="radio"
      />
      <label
        aria-label="2 stars"
        className="rating__label"
        htmlFor={`rating-${name}-2`}
      >
        <span className="rating__icon rating__icon--star">★</span>
      </label>
      <input
        onChange={handleChange}
        className="rating__input"
        name={name}
        checked={value === "2"}
        id={`rating-${name}-2`}
        value="2"
        type="radio"
      />
      <label
        aria-label="3 stars"
        className="rating__label"
        htmlFor={`rating-${name}-3`}
      >
        <span className="rating__icon rating__icon--star">★</span>
      </label>
      <input
        onChange={handleChange}
        className="rating__input"
        name={name}
        checked={value === "3"}
        id={`rating-${name}-3`}
        value="3"
        type="radio"
      />
      <label
        aria-label="4 stars"
        className="rating__label"
        htmlFor={`rating-${name}-4`}
      >
        <span className="rating__icon rating__icon--star">★</span>
      </label>
      <input
        onChange={handleChange}
        className="rating__input"
        name={name}
        checked={value === "4"}
        id={`rating-${name}-4`}
        value="4"
        type="radio"
      />
      <label
        aria-label="5 stars"
        className="rating__label"
        htmlFor={`rating-${name}-5`}
      >
        <span className="rating__icon rating__icon--star">★</span>
      </label>
      <input
        onChange={handleChange}
        className="rating__input"
        name={name}
        checked={value === "5"}
        id={`rating-${name}-5`}
        value="5"
        type="radio"
      />
    </div>
  );
};

const defaultValues = {
  country: "",
  racism_experience: "0",
  lgbtqi_acceptence: "0",
  womens_safety: "0",
  description: "",
};

const Form = () => {
  const [fields, setFields] = useState(defaultValues);
  const [country, setCountry] = useState(defaultValues.country);

  // We need to do this because Google onPlaceSelected uses inital fields values from setting function
  useEffect(() => {
    setFields({ ...fields, country: country });
  }, [country]);

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    // console.log(name, value, checked, type);
    setFields({
      ...fields,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handlePlaceSelect = (place) => {
    setFields({ ...fields, country: place.formatted_address });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fields);
    // Connect to API fetch('/something', {method: "POST"})
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Submit a review</h1>
        <p>What were your experience in the country?</p>
      </div>

      <div>
        <Autocomplete
          apiKey={process.env.REACT_APP_GOOGLE_API}
          onPlaceSelected={(place) => {
            setCountry(place.formatted_address);
          }}
          style={{}}
          placeholder="Search for a country"
        />
      </div>

      <div className="d-flex flex-column align-items-center flex-sm-row justify-content-sm-center">
        <label>As a member of the LGBTQI+ community</label>
        <Ratings
          name={"lgbtqi_acceptence"}
          handleChange={handleChange}
          value={fields.lgbtqi_acceptence}
        />
      </div>

      <div className="d-flex flex-column align-items-center flex-sm-row justify-content-sm-center">
        <label>As a person of colour</label>
        <Ratings
          name={"racism_experience"}
          handleChange={handleChange}
          value={fields.racism_experience}
        />
      </div>

      <div className="d-flex flex-column align-items-center flex-sm-row justify-content-sm-center">
        <label>As a person identifying as a woman</label>
        <Ratings
          name={"womens_safety"}
          handleChange={handleChange}
          value={fields.womens_safety}
        />
      </div>

      <div>
        <textarea
          name="description"
          onChange={handleChange}
          type="text"
          value={fields.description}
          placeholder="Comments"
          rows="5"
          cols="35"
        />
      </div>

      <div>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default Form;

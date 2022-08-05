import { useEffect, useState } from "react";
import "./Form.css";
import countries from "../data/countries-data.json";
import Select from "react-select";
import { useNavigate, Link } from "react-router-dom";

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
  lgbtqi_acceptance: "0",
  womens_safety: "0",
  description: "",
};

const options = countries.map((country) => {
  return { label: country.name, value: country.name };
});

const Form = ({ user, createReview }) => {
  const navigate = useNavigate();
  console.log(user);
  const [fields, setFields] = useState(defaultValues);
  const [country, setCountry] = useState(defaultValues.country);
  const [searchTerm, setSearchTerm] = useState("");

  // We need to do this because Google onPlaceSelected uses inital fields values from setting function
  useEffect(() => {
    setFields({ ...fields, country: country });
  }, [country]);

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    console.log(name, value, checked, type);
    setSearchTerm(event.target.value);
    setFields({
      ...fields,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSelect = (value) => {
    console.log(value);
    setFields({
      ...fields,
      country: value.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createReview(fields);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Link to="/">←Back</Link>
      <div>
        <h1>Submit a review</h1>
        <p>What was your experience of travelling in this country?</p>
      </div>

      <Select
        options={options}
        // value={fields.country}
        name="country"
        placeholder="Choose your country"
        isSearchable
        onChange={handleSelect}
      />

      <div className="d-flex flex-column align-items-center flex-sm-row justify-content-sm-center">
        <label>As a member of the LGBTQIA+ community</label>
        <Ratings
          name={"lgbtqi_acceptance"}
          handleChange={handleChange}
          value={fields.lgbtqi_acceptance}
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
        <label>As a woman</label>
        <Ratings
          name={"womens_safety"}
          handleChange={handleChange}
          value={fields.womens_safety}
        />
      </div>

      <div className="d-flex justify-content-center">
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

      <div className="d-flex justify-content-center mt-2">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default Form;
export { Ratings };

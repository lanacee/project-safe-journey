import Autocomplete from "react-google-autocomplete";
import { useState } from "react";

const defaultValues = {
  location: "",
  racism_experience: "",
  lgbtqi_acceptence: "",
  womens_safety: "",
  images: "",
  description: "",
  date: "",
};

const Form = () => {
  const [fields, setFields] = useState("");

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    setFields({
      ...fields,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  console.log(fields);

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Submit a review</h1>
        <p>What wereyour experience in the country?</p>
      </div>
      <div>
        <Autocomplete
          apiKey={process.env.REACT_APP_GOOGLE_API}
          onPlaceSelected={(place) => {
            console.log(place.formatted_address);
          }}
          placeholder="Search for a country"
        />
      </div>
      <div>
        <label>Date</label>
        <input type="date" onChange={handleChange} name="date" />
      </div>

      <div>
        <label>As a member of the LGBTQI+ community</label>
        <input
          type="checkbox"
          onChange={handleChange}
          name="lgbtqi_acceptance"
          checked={fields.lgbtqi_acceptence}
        />
      </div>

      <div>
        <label>As a person of colour</label>
        <input
          type="checkbox"
          onChange={handleChange}
          name="racism_experience"
          checked={fields.racism_experience}
        />
      </div>

      <div>
        <label>As a person identifying as a woman</label>
        <input
          type="checkbox"
          onChange={handleChange}
          name="womens_safety"
          checked={fields.womens_safety}
        />
      </div>

      <div>
        <textarea
          name="description"
          onChange={handleChange}
          type="text"
          value={fields.description}
          placeholder="Comments"
        />
      </div>

      <div>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default Form;

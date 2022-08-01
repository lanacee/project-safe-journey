import Autocomplete from "react-google-autocomplete";
import { useState } from "react";

const defaultValues = {
  location: "",
  racism_experience: false,
  lgbtqi_acceptence: false,
  womens_safety: false,
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
        <label>Location</label>
        <Autocomplete
          apiKey={process.env.REACT_APP_GOOGLE_API}
          onPlaceSelected={(place) => {
            console.log(place.formatted_address);
          }}
          placeholder="Search for a country"
        />
      </div>

      <div>Did you encounter any of the following?</div>
      <div>
        <label>Racism Experience</label>
        <input
          type="checkbox"
          onChange={handleChange}
          name="racism_experience"
          checked={fields.racism_experience}
        />
      </div>
      <div>
        <label>LGBTQI+ acceptance</label>
        <input
          type="checkbox"
          onChange={handleChange}
          name="lgbtqi_acceptance"
          checked={fields.lgbtqi_acceptence}
        />
      </div>
      <div>
        <label>Womens Safety</label>
        <input
          type="checkbox"
          onChange={handleChange}
          name="womens_safety"
          checked={fields.womens_safety}
        />
      </div>

      <div>
        <label>Image URL</label>
        <input type="file" onChange={handleChange} name="imageUrl" />
      </div>

      <div>
        <label>Description</label>
        <textarea
          name="description"
          onChange={handleChange}
          type="text"
          value={fields.description}
        />
      </div>

      <div>
        <label>Date</label>
        <input type="date" onChange={handleChange} name="date" />
      </div>
    </form>
  );
};

export default Form;

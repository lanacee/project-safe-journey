import Autocomplete from "react-google-autocomplete";
import { useState } from "react";

const defaultValues = {
  country: "",
  racism_experience: 0,
  lgbtqi_acceptence: 0,
  womens_safety: 0,
  description: "",
};

const Form = () => {
  const [fields, setFields] = useState(defaultValues);

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
        <p>What were your experience in the country?</p>
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
        <label>As a member of the LGBTQI+ community</label>
        {/* <input
          onChange={handleChange}
          name="lgbtqi_acceptance"
          checked={fields.lgbtqi_acceptence}
        /> */}
        <body>
          <div class="rate">
            <input type="radio" id="star5" name="rate" value="5" />
            <label for="star5" title="text">
              5 stars
            </label>
            <input type="radio" id="star4" name="rate" value="4" />
            <label for="star4" title="text">
              4 stars
            </label>
            <input type="radio" id="star3" name="rate" value="3" />
            <label for="star3" title="text">
              3 stars
            </label>
            <input type="radio" id="star2" name="rate" value="2" />
            <label for="star2" title="text">
              2 stars
            </label>
            <input type="radio" id="star1" name="rate" value="1" />
            <label for="star1" title="text">
              1 star
            </label>
          </div>
        </body>
      </div>

      <div>
        <label>As a person of colour</label>
        {/* <input
          type="radio"
          onChange={handleChange}
          name="racism_experience"
          checked={fie
            lds.racism_experience}
        /> */}
        <body>
          <div class="rate">
            <input type="radio" id="star5" name="rate" value="5" />
            <label for="star5" title="text">
              5 stars
            </label>
            <input type="radio" id="star4" name="rate" value="4" />
            <label for="star4" title="text">
              4 stars
            </label>
            <input type="radio" id="star3" name="rate" value="3" />
            <label for="star3" title="text">
              3 stars
            </label>
            <input type="radio" id="star2" name="rate" value="2" />
            <label for="star2" title="text">
              2 stars
            </label>
            <input type="radio" id="star1" name="rate" value="1" />
            <label for="star1" title="text">
              1 star
            </label>
          </div>
        </body>
      </div>

      <div>
        <label>As a person identifying as a woman</label>
        {/* <input
          type="radio"
          onChange={handleChange}
          name="womens_safety"
          checked={fields.womens_safety}
        /> */}
        <body>
          <div class="rate">
            <input type="radio" id="star5" name="rate" value="5" />
            <label for="star5" title="text">
              5 stars
            </label>
            <input type="radio" id="star4" name="rate" value="4" />
            <label for="star4" title="text">
              4 stars
            </label>
            <input type="radio" id="star3" name="rate" value="3" />
            <label for="star3" title="text">
              3 stars
            </label>
            <input type="radio" id="star2" name="rate" value="2" />
            <label for="star2" title="text">
              2 stars
            </label>
            <input type="radio" id="star1" name="rate" value="1" />
            <label for="star1" title="text">
              1 star
            </label>
          </div>
        </body>
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

import Autocomplete from "react-google-autocomplete";

const Search = (props) => {
  return (
    <div className="container">
      <div className="header">
        <h3>Feel safe when you're out and about exploring</h3>
        <p>Read travel reviews from other people like you
        </p>
        <div>
          <div>
            <label>Search</label>
            <Autocomplete
              apiKey={process.env.REACT_APP_GOOGLE_API}
              onPlaceSelected={(place) => {
                console.log(place.formatted_address);
              }}
              placeholder="Search for a country"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

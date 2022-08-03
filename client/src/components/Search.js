import Autocomplete from "react-google-autocomplete";

const Search = (props) => {
  return (
    <div className="container">
      <div className="header">
        <h3>To feel safe when you are out and about exploring</h3>
        <p>
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit..."
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

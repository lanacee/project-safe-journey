import "./App.css";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import Carousels from "./components/Carousels";
import Quotes from "./components/Quotes";
import Countries from "./components/Countries";
import Form from "./components/Form";
import countryData from "./data/countries-data.json"

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Search />
      <Carousels />
      <Quotes />
      <hr />
      <footer className="footer">Contact Us: foobar@gmail.com</footer>

      <Routes>
        <Route path="/countries" element={<Countries data={countryData} />} />
      </Routes>


    </div>
  );
};

export default App;

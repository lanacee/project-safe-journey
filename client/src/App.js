import "./App.css";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import Carousels from "./components/Carousels";
import Quotes from "./components/Quotes";
import Countries from "./components/Countries";
import Home from "./components/Home";
import Form from "./components/Form";
import countryData from "./data/countries-data.json";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries" element={<Countries data={countryData} />} />
        <Route path="/suzy" element={<Form />} />
      </Routes>
    </div>
  );
};

export default App;

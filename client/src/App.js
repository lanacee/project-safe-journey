import "./App.css";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import Carousels from "./components/Carousels";
import Quotes from "./components/Quotes";
import Countries from "./components/Countries";
import Home from "./components/Home";
import Form from "./components/Form";
import Login from "./components/Users/Login";
import countryData from "./data/countries-data.json";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Register from "./components/Users/Register";

const App = () => {
  const [authorised, setAuthorised] = useState(null);

  const navigate = useNavigate();

  const handleAuth = (authed) => {
    setAuthorised(authed);
    navigate("/");
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries" element={<Countries data={countryData} />} />
        <Route path="/login" element={<Login handleLogin={handleAuth} />} />
        <Route
          path="/register"
          element={<Register handleRegister={handleAuth} />}
        />
        <Route path="/suzy" element={<Form />} />
      </Routes>
    </div>
  );
};

export default App;

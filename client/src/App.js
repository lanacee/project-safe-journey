import "./App.css";
import NavBar from "./components/NavBar";
import Countries from "./components/Countries";
import Home from "./components/Home";
import Form from "./components/Form";
import Login from "./components/Users/Login";
import countryData from "./data/countries-data.json";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Register from "./components/Users/Register";

import countries from "./data/countries-data.json";
import Africa from "./components/Continents/Africa";
import Asia from "./components/Continents/Asia";
import Europe from "./components/Continents/Europe";
import NAmerica from "./components/Continents/North-America";
import Oceania from "./components/Continents/Oceania";
import SAmerica from "./components/Continents/South-America";

const App = () => {
  const [authorised, setAuthorised] = useState(null);
  const navigate = useNavigate();

  const handleAuth = (authed) => {
    setAuthorised(authed);
    navigate("/");
  };

  const handleLogout = () => {
    setAuthorised(null);
    navigate("/");
  };

  useEffect(() => {
    const checkIfLoggedIn = async () => {
      const res = await fetch(`/users/isauthorised`);
      const data = await res.json();
      console.log(data.msg);
      setAuthorised(data.authorised);
    };
    checkIfLoggedIn();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries" element={<Countries data={countryData} />} />
        <Route path="/login" element={<Login handleLogin={handleAuth} />} />
        <Route
          path="/register"
          element={<Register handleRegister={handleAuth} />}
        />
        <Route path="/reviews/new" element={<Form countries={countries} />} />
        <Route path="/Africa" element={<Africa />} />
        <Route path="/Asia" element={<Asia />} />
        <Route path="/Europe" element={<Europe />} />
        <Route path="/North-America" element={<NAmerica />} />
        <Route path="/Oceania" element={<Oceania />} />
        <Route path="/South-America" element={<SAmerica />} />
      </Routes>
    </div>
  );
};

export default App;

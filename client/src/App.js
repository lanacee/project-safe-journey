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

const App = () => {
  const [authorised, setAuthorised] = useState(null);
  const navigate = useNavigate();
  fetch(`${process.env.REACT_APP_API_ENDPOINT}/reviews`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });

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
      const res = await fetch(
        `${process.env.REACT_APP_API_ENDPOINT}/users/isauthorised`
      );
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
        <Route path="/reviews/new" element={<Form />} />
      </Routes>
    </div>
  );
};

export default App;

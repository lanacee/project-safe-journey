import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";
import countryData from "./data/countries-data.json";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Users/Login";
import Logout from "./components/Users/Logout";
import Register from "./components/Users/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Form from "./components/Form";
import UserReviews from "./components/UserReviews";
import CountryReviewDetail from "./components/CountryReviewDetail";
import Countries from "./components/Countries";
import Services from "./components/Services";
import Edit from "./components/Edit";

import Africa from "./components/Continents/Africa";
import Asia from "./components/Continents/Asia";
import Europe from "./components/Continents/Europe";
import NAmerica from "./components/Continents/North-America";
import Oceania from "./components/Continents/Oceania";
import SAmerica from "./components/Continents/South-America";

const App = () => {
  const [authorised, setAuthorised] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleAuth = (authed) => {
    setAuthorised(authed.authorised);
    setUser(authed.user);
    navigate("/");
  };

  const handleLogout = () => {
    setAuthorised(false);
    navigate("/");
  };

  useEffect(() => {
    const checkIfLoggedIn = async () => {
      const res = await fetch(`/users/isauthorised`);
      const data = await res.json();
      console.log(data.msg);
      setAuthorised(data.authorised);
      setUser(data.user);
    };
    checkIfLoggedIn();
  }, []);

  const [reviews, setReviews] = useState(null);

  const getReviews = async () => {
    const url = "/reviews";
    const res = await fetch(url);
    const data = await res.json();
    setReviews(data);
  };

  useEffect(() => {
    getReviews();
  }, [0]);

  const handleCreate = (name) => {
    console.log("App.js create review with name:", name);
  };

  const handleDelete = async (reviewID) => {
    await fetch(`/reviews/my-reviews`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: reviewID }),
    });
    setReviews(reviews.filter((rv) => rv._id !== reviewID));
  };

  const handleEdit = async (edit, index) => {
    console.log(edit);
    const res = await fetch(`/reviews/my-reviews/edit/${edit._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(edit),
    });
    const editedReviews = await res.json();
    setReviews([
      ...reviews.slice(0, index),
      editedReviews,
      ...reviews.slice(index + 1),
    ]);
  };

  const createReview = (fields) => {
    fetch(`/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...fields, user_id: user.id }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setReviews([...reviews, data]);
        navigate("/my-reviews");
      });
  };

  return (
    <div className="App">
      <NavBar authorised={authorised} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/countries" element={<Countries data={countryData} />} />
        <Route path="/support" element={<Services />} />
        <Route
          path="/reviews/new"
          element={
            <ProtectedRoute authorised={authorised}>
              {user && <Form user={user} createReview={createReview} />}
            </ProtectedRoute>
          }
        />
        <Route
          path="/my-reviews"
          element={
            user &&
            reviews && (
              <UserReviews
                reviews={reviews}
                user={user}
                handleCreate={handleCreate}
                handleDelete={handleDelete}
              />
            )
          }
        />
        <Route
          path="/my-reviews/edit/:reviewID"
          element={
            reviews && <Edit reviews={reviews} handleEdit={handleEdit} />
          }
        />
        <Route
          path="/countries/:countryname"
          element={reviews && <CountryReviewDetail reviews={reviews} />}
        />

        <Route
          path="/register"
          element={<Register handleRegister={handleAuth} />}
        />
        <Route path="/login" element={<Login handleLogin={handleAuth} />} />
        <Route path="logout" element={<Logout handleLogout={handleLogout} />} />

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

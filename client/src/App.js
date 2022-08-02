import "./App.css";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import Carousels from "./components/Carousels";
import Quotes from "./components/Quotes";
import Form from "./components/Form";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Search />
      <Carousels />
      <Quotes />
      <Form />
      <hr />
      <footer className="footer">Contact Us: foobar@gmail.com</footer>
    </div>
  );
};

export default App;

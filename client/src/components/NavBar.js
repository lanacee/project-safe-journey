import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Autocomplete from "react-google-autocomplete";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/">
          <h1>✈</h1>
        </Link>
        <Navbar.Brand href="/">Safe Journey</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">⌂ Home </Nav.Link>
            <Nav.Link href="/profile">♚ Profile</Nav.Link>
            <Nav.Link href="/support">☮ Support Services</Nav.Link>
            <Nav.Link href="/countries">☀ All Countries</Nav.Link>
            <Nav.Link href="/reviews/new">✎ New Review</Nav.Link>
            <br />
            <Autocomplete
              //   apiKey={process.env.GOOGLE_API}
              apiKey={process.env.REACT_APP_GOOGLE_API}
              onPlaceSelected={(place) => {
                console.log(place);
              }}
              placeholder="Search for a country"
            />
            <br />
            <Link to="/register">
              {" "}
              <Button className="register" variant="secondary">
                Register
              </Button>{" "}
            </Link>
            <Link to="/login">
              {" "}
              <Button className="login" variant="primary">
                Log In
              </Button>{" "}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

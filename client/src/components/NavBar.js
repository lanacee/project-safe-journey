import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Logout from "./Users/Logout";

function NavBar(props) {
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
            <Nav.Link href="/">⌂ Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/countries">☀ All Countries</Nav.Link>
            <Nav.Link href="/support">☮ Support Services</Nav.Link>
            {props.authorised && <Link className="nav_review" to="/my-reviews">♚ My Reviews</Link>}
            {props.authorised && <Nav.Link href="/reviews/new">✎ New Review</Nav.Link>}
            <br />
            <Link to="/register">
              {" "}
              <Button className="register" variant="secondary">
                Register
              </Button>{" "}
            </Link>
            {/* Login/ logout functionality below */}
            {props.authorised ? <Logout handleLogout={props.handleLogout} />
              : <Link to="/login"><Button className="login" variant="primary">Log In</Button></Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

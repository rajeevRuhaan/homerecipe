import React from "react";
import { Nav, Navbar } from "react-bootstrap";

// import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="sm" bg="standard" variant="" fixed="top">
        <Navbar.Brand href="/home">
          <h1>Recipe Book</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link exact="true" href="/">
              {" "}
              Home
            </Nav.Link>
            <Nav.Link href="/about"> About</Nav.Link>
            <Nav.Link href="/recipe">Recipe</Nav.Link>
            <Nav.Link href="/form">Form</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;

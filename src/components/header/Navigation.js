import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

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
            <LinkContainer exact to="/about">
              <Nav.Link> Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link> About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/recipe">
              <Nav.Link href="/recipe">Recipe</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/form">
              <Nav.Link href="/form">Form</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;

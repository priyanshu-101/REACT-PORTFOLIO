import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function Navigation() {

    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
              <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={"https://t4.ftcdn.net/jpg/05/25/08/09/360_F_525080936_JEpnKXh2siYKBPpsqd98pbbcIzy4ySKz.jpg"} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
        </Navbar.Toggle>
        
        </Container>

    </Navbar>
  );
}

export default Navigation;

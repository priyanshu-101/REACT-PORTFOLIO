import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function NavBar() {

    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

  return (
    <Navbar
    expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >

    </Navbar>
  )
}

export default NavBar
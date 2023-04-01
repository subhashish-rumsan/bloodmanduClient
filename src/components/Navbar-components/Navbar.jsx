import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React, { useState, useEffect } from "react";
import "./Navbar.css";

function CollapsibleExample() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="main__navbar"
      // variant="danger"
    >
      <Container>
        <Navbar.Brand href="#home" style={{ color: "black" }}>
          Bloodmandu
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto my-2">
            <Nav.Link href="#features" style={{ color: "#880808" }}>
              Home
            </Nav.Link>
            <Nav.Link href="#aboutus" style={{ color: "black" }}>
              About Us
            </Nav.Link>
            <Nav.Link href="#bloodcenter" style={{ color: "black" }}>
              Blood Center
            </Nav.Link>
            <Nav.Link href="#blog" style={{ color: "black" }}>
              Blog
            </Nav.Link>
            <Nav.Link href="#contactus" style={{ color: "black" }}>
              Contact Us
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#memes">
              <button className="navbar__button__two">Buyer</button>
            </Nav.Link>
            <Nav.Link href="#memes">
              <button className="navbar__button__one">Seller</button>
            </Nav.Link>
            <Nav.Link href="#deets" style={{ color: "black" }} className="my-2">
              {isMobile ? (
                <div className="d-flex">
                  <p className="mx-2">Cart</p>
                  <ShoppingCartIcon />{" "}
                </div>
              ) : (
                <ShoppingCartIcon />
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;

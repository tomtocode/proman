import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          {/* <Navbar.Brand href="#home">PROMAN</Navbar.Brand> */}
          {/* TODO: Use # navigation */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavLink exact to="/proman" activeClassName="main-nav-active" style={{ color: "white", fontWeight: "bold" }}>Home</NavLink>
                <NavLink exact to="/services" activeClassName="main-nav-active" style={{ color: "white", fontWeight: "bold", marginLeft: "20px" }}>Services</NavLink>
                <NavLink exact to="/about" activeClassName="main-nav-active" style={{ color: "white", fontWeight: "bold", marginLeft: "20px" }}>About Us</NavLink>
                {/* <NavLink to="/portfolio" style={{color:"white", fontWeight: "bold"}}>Portfolio</NavLink> */}
              </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar >
    </>
  );
};

export default NavBar;
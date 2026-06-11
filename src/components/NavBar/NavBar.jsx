import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark" className="px-2">
        <Container>
          {/* <Navbar.Brand href="#home">PROMAN</Navbar.Brand> */}
          {/* TODO: Use # navigation */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ms-auto" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav className="me-auto align-items-start align-items-lg-center">
              <NavLink exact to="/" activeClassName="main-nav-active" style={{ color: "white", fontWeight: "bold" }}>Home</NavLink>
              <NavLink exact to="/services" activeClassName="main-nav-active" style={{ color: "white", fontWeight: "bold", marginLeft: "20px" }}>Services</NavLink>
              <NavLink exact to="/about" activeClassName="main-nav-active" style={{ color: "white", fontWeight: "bold", marginLeft: "20px" }}>About Us</NavLink>
              {/* <NavLink to="/portfolio" style={{color:"white", fontWeight: "bold"}}>Portfolio</NavLink> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
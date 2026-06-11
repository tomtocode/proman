import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark" className="px-0 navbar-mobile-toggle">
        <Container fluid className="px-0">
          {/* <Navbar.Brand href="#home">PROMAN</Navbar.Brand> */}
          {/* TODO: Use # navigation */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ms-auto me-2" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end w-100 navbar-collapse-custom">
            <Nav className="ms-auto align-items-start align-items-lg-center nav-custom">
              <NavLink exact to="/" activeClassName="main-nav-active" style={{ color: "white", fontWeight: "bold", textDecoration: "none" }}>Home</NavLink>
              <NavLink exact to="/services" activeClassName="main-nav-active" style={{ color: "white", fontWeight: "bold", marginLeft: "20px", textDecoration: "none" }}>Services</NavLink>
              <NavLink exact to="/about" activeClassName="main-nav-active" style={{ color: "white", fontWeight: "bold", marginLeft: "20px", textDecoration: "none" }}>About Us</NavLink>
              {/* <NavLink to="/portfolio" style={{color:"white", fontWeight: "bold"}}>Portfolio</NavLink> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
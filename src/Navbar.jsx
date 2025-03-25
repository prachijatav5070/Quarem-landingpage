import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./images/logo.png";

const NavbarPage = () => {
  return (
    <Container fluid>
      <Navbar expand="lg" className="NavClass">
        <Navbar.Brand href="#">
          <img src={logo} width={150} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 navlinks" navbarScroll>
            <NavDropdown title="Features" id="navbarScrollingDropdown">
              <NavDropdown.Item>Leases</NavDropdown.Item>
              <NavDropdown.Item>Critical Dates</NavDropdown.Item>
              <NavDropdown.Item>ASC 842 | IFRS 16</NavDropdown.Item>
              <NavDropdown.Item>Reporting</NavDropdown.Item>
              <NavDropdown.Item>Tasks</NavDropdown.Item>
              <NavDropdown.Item>FF&E</NavDropdown.Item>
              <NavDropdown.Item>Properties</NavDropdown.Item>
              <NavDropdown.Item>Lease Abstracting</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#">Pricing</Nav.Link>
            <Nav.Link href="#">Why Quarem</Nav.Link>

            <NavDropdown title="Resources" id="navbarScrollingDropdown">
              <NavDropdown.Item>Blog</NavDropdown.Item>
              <NavDropdown.Item>Guides</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Company" id="navbarScrollingDropdown">
              <NavDropdown.Item>Quarem Story</NavDropdown.Item>
              <NavDropdown.Item>Leadership</NavDropdown.Item>
              <NavDropdown.Item>Careers</NavDropdown.Item>
              <NavDropdown.Item>Contact</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex" style={{ gap: "24px" }}>
            <button className="navbutton1"> Take A Tour </button>
            <button className="navbutton2"> Schedule a Demo </button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavbarPage;
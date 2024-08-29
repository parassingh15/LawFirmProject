import React from 'react';
import '../style/responsiveNavbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../images/LawLogo.png';
import { Outlet, Link } from "react-router-dom";

function responsiveNavbar() {
    return (
        <div className='ResponsiveNavbarMainDiv'>
            {[false].map((expand) => (
        <Navbar fixed='top' bg="dark" key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#">
                <img className='responsiveNavBarLogo' src={Logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle className='toggleBtn' aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
                bg="dark"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title className='menuTitle'  id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 offcanvasMenuLinks">
                  
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <h3 className='offCanvasMenu'>Home</h3>
                </Link>
                <Link to="/practiceArea" style={{ textDecoration: 'none' }}>
                  <h3 className='offCanvasMenu'>Practice Area</h3>
                </Link>
                <Link to="/attorneyPage" style={{ textDecoration: 'none' }}>
                  <h3 className='offCanvasMenu'>Attorney</h3>
                </Link>
                  <h3 className='offCanvasMenu'>Case Study</h3>
                  <h3 className='offCanvasMenu'>Blog</h3>

                  <img className='offcanvasLogo' src={Logo} alt="" />

                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
            
        </div>
    );
}

export default responsiveNavbar;
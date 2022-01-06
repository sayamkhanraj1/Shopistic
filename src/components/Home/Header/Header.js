import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'


const Header = () => {
    return (
        <div className="header p-2">
            <Navbar variant="light" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand className="fw-bold fs-3">
                    <span className="text-danger">Shop</span><span className="text-secondary">istic.</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-end">
                        <Nav className="m-auto">
                            <NavLink className="text-decoration-none fs-5 ms-4 text-secondary header-texts" to="/home">Home</NavLink>
                            <NavLink className="text-decoration-none header-text fs-5 ms-4 text-secondary header-texts" to="/moreProducts header-texts">Collection</NavLink>
                            <NavLink className="text-decoration-none header-text fs-5 ms-4 text-secondary header-texts" to="/moreProducts">Blog</NavLink>
                            <NavLink className="text-decoration-none header-text fs-5 ms-4 text-secondary header-texts" to="/moreProducts">Contact Us</NavLink>
                            
                            {
                               <NavLink className="text-decoration-none header-text ms-3 text-secondary fs-5 header-texts" to="/dashbord">Dashbord</NavLink>
                            }  
                        </Nav>
                                <NavLink className="text-decoration-none text-white fs-6 ms-auto fw-bold btn service-btn btn-sm" to="/login"><i className="fas fa-sign-in-alt me-2 text-white "></i>Sign In</NavLink>
                            {
                               <span className="fw-bold ms-4 me-auto header-text">user name</span>
                            }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
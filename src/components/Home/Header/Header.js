import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import useAuth from '../../../Hooks/useAuth';


const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div className="header p-2">
            <Navbar variant="light" expand="sm" sticky="top">
                <Container>
                    <Navbar.Brand className="fw-bold fs-3">
                    <span className="text-danger">Shop</span><span className="text-secondary">istic.</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-end">
                        <Nav className="m-auto">
                            <NavLink className="text-decoration-none fs-5 ms-4 text-secondary header-texts" to="/">Home</NavLink>
                            <NavLink className="text-decoration-none header-text fs-5 ms-4 text-secondary header-texts" to="/moreproduct">Collection</NavLink>
                            <NavLink className="text-decoration-none header-text fs-5 ms-4 text-secondary header-texts" to="/blogs">Blogs</NavLink>
                            <NavLink className="text-decoration-none header-text fs-5 ms-4 text-secondary header-texts" to="/contactus">Contact Us</NavLink>
                            
                            {
                               <NavLink className="text-decoration-none header-text ms-3 text-secondary fs-5 header-texts" to="/dashbord">Dashbord</NavLink>
                            }  
                        </Nav>
                            {
                                user.email && <span className="fw-bold ms-4 me-1 header-text">{user.displayName}</span>
                            }
                            {
                                user.email?
                                <NavLink onClick={logOut} className="text-decoration-none text-white fs-6 ms-3 fw-bold btn login-btn btn-sm" to="/login"><i className="fas fa-sign-in-alt me-2 text-white"></i>LogOut</NavLink>
                                :
                                <NavLink className="text-decoration-none text-white fs-6 ms-3 fw-bold btn service-btn btn-sm login-btn" to="/login"><i className="fas fa-sign-in-alt me-2 text-white "></i>Sign In</NavLink>
                            }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
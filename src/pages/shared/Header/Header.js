import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/home">Health Care Site</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end nav-link">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Cost & Finance</Nav.Link>
                        <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link>
                        {user.email ?
                            <button onClick={logOut} className="btn btn-danger">Log Out</button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                        {user.email ?
                            <Navbar.Text className="m-3">
                                Signed in as: {user?.displayName}
                            </Navbar.Text> :
                            null
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
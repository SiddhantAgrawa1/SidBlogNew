import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'

const Appbar = () => {
    return (
        <Navbar expand="lg" bg="dark" variant="dark">
        <Container fluid>
            <Navbar.Brand href="/">Sidblog</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <LinkContainer to="/">
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                
                <LinkContainer to="/blogs">
                    <Nav.Link>Blogs</Nav.Link>
                </LinkContainer>
                
                <LinkContainer to="/about">
                    <Nav.Link>About</Nav.Link>
                </LinkContainer>
            
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
  );
}

export default Appbar;
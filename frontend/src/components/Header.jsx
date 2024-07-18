import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand >ChopShop</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <LinkContainer to ="/cart">
                                <Nav.Link href="/cart"><FaCartShopping /> Cart</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to ="/login">   
                                <Nav.Link href="/login"><FaUser />Sign In</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header   
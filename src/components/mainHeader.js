import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function MainHeader() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container fluid>
                <Navbar.Brand href="" className='mt-3'>
                    <img
                        src="/assets/images/logo-sin-fondo.png"
                        alt="Logo"
                        style={{ width: '5%' }}
                        className="d-inline-block align-text-top"
                    />
                    Level-Up Gamer
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarNav" />

                <Navbar.Collapse id="navbarNav">
                    <Nav className="me-auto">
                        <Nav.Link href="" active>Home</Nav.Link>
                        <Nav.Link href="">Tienda</Nav.Link>
                        <Nav.Link href="">Nosotros</Nav.Link>
                        <Nav.Link href="">Blogs</Nav.Link>
                        <Nav.Link href="">Contacto</Nav.Link>
                    </Nav>

                    <Nav className="ms-auto">
                        <Nav.Link href="">Registro</Nav.Link>
                        <Nav.Link href="">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MainHeader;
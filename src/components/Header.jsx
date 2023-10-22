import React from 'react'
import { Navbar,Container,Nav,NavDropdown,Form, Button } from 'react-bootstrap'
import logo from '../icons/icon.png'

function Headder() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary position-fixed w-100 " data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        TRACK'M
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Latest</Nav.Link>
                            <NavDropdown title="Explore" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Trending</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Recomented</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">More</NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Headder
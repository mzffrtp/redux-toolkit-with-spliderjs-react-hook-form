import React from "react";

/* styling */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function NavBar () {
    return(
        <Navbar bg="light" variant="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/counter">Counter</Nav.Link>
            <Nav.Link href="/todo">ToDo App</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}
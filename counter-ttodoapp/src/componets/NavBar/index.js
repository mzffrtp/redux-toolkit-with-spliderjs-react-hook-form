import React from "react";
import { Button } from "react-bootstrap";

/* styling */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_THEME } from "../../redux/themeSlice";


export default function NavBar() {
  const dispatch = useDispatch();
  const { themeState } = useSelector((state) => state)
  return (
    <nav className={`navbar-${themeState} bg-${themeState === "light" ? "light" : "dark"}`}>
      <Container>
        <Nav className="d-flex justify-content-center p-3">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/counter">Counter</Nav.Link>
          <Nav.Link href="/todo">ToDo App</Nav.Link>
          <Container className="my-3 d-flex justify-content-center">{themeState === "light" ? (
            <Button
              onClick={() => {
                dispatch(CHANGE_THEME("dark"))
              }}
            >Dark Mode</Button>
          ) : (
            <Button
              onClick={() => {
                dispatch(CHANGE_THEME("light"))
              }}>Light Mode</Button>
          )}</Container>
        </Nav>
      </Container>
    </nav>
  )
}
import React from "react";

import Slider from "../../componets/Slider/slider";
import { Container, Button, Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom"

export default function HomePage() {
    return (
        <div>
            <Slider />
            <div>
                <h2 className="text-center"> React Toolkit Exercises</h2>
                <Container className="d-flex justify-content-center" border="primary">
                    <Row >
                        <Col>
                            <Container
                                className="bg-light m-3 p-3 text-center">
                                <h3>Counter</h3>
                                <Link className="btn btn-outline-warning"
                                    to={"/counter"}>Click</Link>
                            </Container>
                            <Container className="bg-light m-3 p-3 text-center">
                                <h3>ToDo</h3>
                                <Link className="btn btn-outline-danger"
                                    to={"/todo"}
                                >Click</Link>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
import React, {useState} from "react";
import { Form, Col, Button, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../../assets/styles/todoedit.css"

export default function TodoEdit() {
    const params = useParams();
    const {todoState} = useSelector(state=>state)
    const todoEdited = todoState.todos.find(todo=>todo.id === params.todoId)
    console.log(todoState.todos);
    console.log(params);
    
    return (
        <div className="todoEditWrapper"
        >
            <Form className="todoEdit">
                <Row className="d-flex justify-content-center align-middle py-5">
                    <Col sm={4}>
                        <Form.Group >
                            <Form.Label>
                                Todo Title
                            </Form.Label>
                            <Form.Control type="text" name="title"
                             />
                        </Form.Group>
                    </Col>
                    <Col sm={2}>
                        <Form.Group>
                            <Form.Label>
                                Done?
                            </Form.Label>
                            <Form.Check name="done" value="1" />
                        </Form.Group>
                    </Col>
                    <Col sm={4}>
                        <Button type="submit" className="btn btn-success mt-4 me-2">
                            Edit
                        </Button>
                        <Button type="submit" className="btn btn-danger mt-4">
                            Return
                        </Button>
                    </Col>
                </Row>
            </Form>

        </div>
    )
}
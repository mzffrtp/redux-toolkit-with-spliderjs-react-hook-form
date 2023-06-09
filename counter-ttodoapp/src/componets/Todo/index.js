import React, { useEffect, useState } from "react";
import { Container, Table, Card, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getTodo, addTodo, deleteTodo } from "../../redux/todoSlice";
import axios from "axios";
import { Link } from "react-router-dom";


export default function Todo() {
    const [openEdit, setOpenEdit] = useState(false)
    const dispatch = useDispatch();
    const todoState = useSelector(state => state.todoState)

    useEffect(() => {
        axios.get("http://localhost:3011/todos")
            .then((res) => {
                dispatch(getTodo(res.data))
            })
            .catch((e) => {
                console.log(e);
            })

    }, [])
    return (
        <div>
            <Container className="my-3">
                <Card.Title className="text-center my-3">ToDo with Redux-toolkit!</Card.Title>
                <Card.Text className="text-center my-3">
                    👀 Let´s create a todo app example with redux toolkit! 💨
                </Card.Text>
                <Row className="d-flex justify-content-center">
                    <Form className="my-3"
                        onSubmit={e => {
                            e.preventDefault();
                            const formData = new FormData(e.target);
                            const formValueJanson = Object.fromEntries(formData.entries());
                            console.log(formValueJanson);
                            dispatch(addTodo(formValueJanson))

                        }}>
                        <Row className="d-flex justify-content-center">
                            <Col sm={4}>
                                <Form.Group >
                                    <Form.Label>
                                        Todo Title
                                    </Form.Label>
                                    <Form.Control type="text" name="title" />
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
                                <Button type="submit" className="btn btn-warning mt-4">
                                    Add Todo
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Row>
                <Table striped hover size="sm" variant="warning" responsive className="text-center table-bordered border-dark">
                    <thead >
                        <tr>
                            <th>No</th>
                            <th>Title</th>
                            <th>Done</th>
                            <th>Todo Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todoState.todos.map((todo, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{todo.title}</td>
                                        <td><input type="checkbox" defaultChecked={todo.done} /></td>
                                        <td>
                                            <Link 
                                                className="btn btn-info p-1 me-2"
                                                to={`/editTodo/${todo.id}`}>Edit</Link>
                                            <Button
                                                onClick={e => {
                                                    dispatch(deleteTodo(index))
                                                }}
                                                className="btn btn-danger p-1">Delete</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}
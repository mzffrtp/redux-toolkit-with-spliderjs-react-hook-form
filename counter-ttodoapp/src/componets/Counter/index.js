import React from "react";
/* styling */
import { Card, Container, Col, Button, ButtonGroup } from "react-bootstrap";
import add from "../../assets/add1.png";
import dec from "../../assets/decrease.png";



/* react-redux */
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increase, decrease, resetCounter } from "../../redux/counterSlice"


export default function Counter() {
    const dispatch = useDispatch();
    const { counterState } = useSelector(state => state)
    console.log(counterState);
    return (
        <Container className="d-flex justify-content-center">
            <Col sm={8} lg={6} >
                <Card border="warning" className="my-5">
                    <Card.Body>
                        <Card.Title className="text-center">Counter</Card.Title>
                        <Card.Text className="text-center">
                        👀 Let´s create a counter app with redux toolkit! 💨
                        </Card.Text>
                        <Container className="d-flex flex-wrap justify-content-center gap-2">
                            <div
                                className="btn btn-outline-dark w-50 p-2 m-2">
                                <span 
                                style={{fontSize:"1.5rem", width:"3rem"}}>Counter:&nbsp;{counterState.counter}
                                    </span> 
                            </div>
                            <div
                                className="btn btn-outline-info w-50 p-2 m-2"
                                onClick={e => dispatch(increase())}>Increase <img src={add} style={{ width: "3rem", marginLeft: "1rem" }} alt="" /></div>
                            <div
                                className="btn btn-outline-warning w-50 p-2 m-2"
                                onClick={e => dispatch(decrease())}>
                                <img src={dec} style={{ width: "3rem", marginRight: "1rem" }} alt="" />Decrease
                            </div>
                            <div
                                className="btn btn-outline-danger w-50 p-2 m-2"
                                onClick={e => dispatch(resetCounter(0))}>Reset</div>
                        </Container>
                    </Card.Body>
                </Card>
            </Col>
        </Container>

    )
}


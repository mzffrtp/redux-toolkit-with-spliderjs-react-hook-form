import React from "react";

/*styling */
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import counter from "../../assets/counter.png";
import redux from "../../assets/redux.png";
import todo from "../../assets/todo.png";



export default function Slider() {
    return (
        <div className="container d-flex justify-content-center my-3">
            <Splide aria-label="Redux Exercise"
        options={{
            rewind:true,
            width:"30rem",
            gap:"1rem",
            height:"20rem",
        }}
        >
            <SplideSlide className="d-flex justify-content-center">
                <img src={redux} alt="tool kit" style={{width:"13rem", height:"14rem"}}/>
            </SplideSlide>
            <SplideSlide
            className="d-flex justify-content-center">
                <img src={counter} alt="counter" style={{width:"15rem"}}/>
            </SplideSlide>
            <SplideSlide
            className="d-flex justify-content-center">
                <img src={todo} alt="todo" style={{width:"15rem"}} />
            </SplideSlide>
        </Splide>
        </div>
    )
}
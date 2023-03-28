import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter:0
}

export const counterSlice = createSlice({
    name:"counterSlice",
    initialState: initialState,
    reducers: {
        increase: (state, action) =>{
            state.counter += 1
        },
        
        decrease: (state, action) => {
            state.counter -= 1

        },

        resetCounter:(state, action) =>{
            state.counter = action.payload
        }
    }
})

export const {increase, decrease, resetCounter} =counterSlice.actions

export default counterSlice.reducer
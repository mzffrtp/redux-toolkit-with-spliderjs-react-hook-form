import { createSlice } from "@reduxjs/toolkit";

const initialState = "light";

export const themeSlice = createSlice({
    name:"themeSlice",
    initialState,
    reducers:{
        CHANGE_THEME:(state,action) => {
            return action.payload
        }
    }
})

export const {CHANGE_THEME} = themeSlice.actions

export default themeSlice.reducer
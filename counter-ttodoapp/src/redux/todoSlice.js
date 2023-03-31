import { createSlice, isAsyncThunkAction } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}
export const todoSlice = createSlice({

    name: "todoSlice",
    initialState,
    reducers: {
        addTodo: (state, action) => {

            if(! action.payload.done){
                action.payload.done = false
            } else{
                action.payload.done = true
            }

           const maxID = state.todos.reduce((maxID, item)=> item.id>maxID ? item.id: maxID , 0)

            state.todos.push(action.payload)
        },

        deleteTodo:(state, action) =>{
            console.log((state, action));
            state.todos.splice(action.payload,1)

        }
    }
})

export const { addTodo, deleteTodo} = todoSlice.actions

export default todoSlice.reducer
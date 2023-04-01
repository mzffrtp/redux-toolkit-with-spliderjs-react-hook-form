import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    todos: []
}
export const todoSlice = createSlice({

    name: "todoSlice",
    initialState,
    reducers: {
        getTodo:(state,action) =>{
            return{
                ...state, todos:action.payload
            }
        },

        addTodo: (state, action) => {

            if(! action.payload.done){
                action.payload.done = false
            } else{
                action.payload.done = true
            }

           const maxID = state.todos.reduce((maxID, item)=> item.id>maxID ? item.id: maxID , 0)

            state.todos.push(action.payload)
            console.log("added", state.todos);


        },

        deleteTodo:(state, action) =>{
            state.todos.splice(action.payload,1)

        },

        editTodo:(state,action) =>{
            return{
                
            }

        }
    }
})

export const { getTodo, addTodo, deleteTodo} = todoSlice.actions

export default todoSlice.reducer
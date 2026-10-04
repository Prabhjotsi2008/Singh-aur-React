import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "Hello World"}]
}


export const todoSlice = createSlice({
    name: 'todo', // 'name' cannot be named anything else, it is the key used
    initialState, // its same as initialState: initialState, but we can use shorthand
    reducers: { // (property : func)
        // these two parameters are always present, state is the current state of the slice, action holds the data being passed
        addTodo: (state,action) => {
            const todo = {
                id: nanoid(),
                text: action.payload // payload is an object that contains the data we want to send to the reducer, in this case the text of the todo
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state,action) => {
            state.todos.map((todo) => todo.id === action.payload.id ? {...todo, text: action.payload.text} : todo)
        }
    }
})

// exporting individual actions (reducer functions) so we can use them in our components
export const {addTodo,removeTodo} = todoSlice.actions;

// exporting the reducer so we can use it in our store
export default todoSlice.reducer
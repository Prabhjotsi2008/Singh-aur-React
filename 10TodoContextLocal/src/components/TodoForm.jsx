import React, {useState} from 'react'
import { useToDo } from '../contexts';

function TodoForm() {
   const [todoMsg,setTodoMsg] = useState(""); // this state is for the todo Text
   const {addTodo} = useToDo(); 

   const add = (e) => {
    e.preventDefault();

    if (!todoMsg) return;

    // addTodo({todo,completed: false}) // it will work if we use todo instead of todoMsg as the state variable name
    addTodo({todo:todoMsg,completed: false}) // works same // if key and value are of same name

    setTodoMsg("");
   }

    return (
        <form  className="flex" onSubmit={add}>
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;
import { createSlice } from "@reduxjs/toolkit";
import todoList from '../assets/todoData.json';

const { reducer, actions } = createSlice({
    name: "todo",
    initialState: todoList,
    reducers: {
        addTodo: (todos, actions) => {
            const { title, todo } = actions.payload;
            todos.push({
                id: todo.length + 1,
                title,
                todo,
                completed: false
            });
        }
    }
});

export default reducer;
export const { addTodo } = actions;
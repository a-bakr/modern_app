import { createSlice } from "@reduxjs/toolkit";
import todosList from "../assets/todoData.json";

let id = todosList.length + 1;

const slice = createSlice({
	name: "todo",
	initialState: todosList,
	reducers: {
		addTodo: (todos, action) => {
			const { title, todoBody } = action.payload;
			todos.push({
				id: id++,
				title,
				todo: todoBody,
				completed: false,
			});
		},

		completedTodo: (todos, action) => {
			const { id, completed } = action.payload;
			todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !completed;
					return todo;
				} else {
					return todo;
				}
			});
		},

		deleteTodo: (todos, action) => {
			const index = todos.findIndex((todo) => todo.id === action.payload.id);
			todos.splice(index, 1);
		},
	},
});

const todoReducer = slice.reducer;
export default todoReducer;
export const { addTodo, completedTodo, deleteTodo } = slice.actions;

import { createSlice } from '@reduxjs/toolkit';
import { v4 } from "uuid"

const NAME = 'todoList';

export const todoSlice = createSlice({
    name: NAME,
    initialState: {
      todos: [],
    },
    reducers: {
      setTodo: (state, action) => {
        const todo = {
          id: v4(),
          text: action.payload
        }
        state.todos = [...state.todos, todo]
      },
      delTodo: (state, action) => {
        state.todos = [...state.todos.filter((todo)=>
            todo.id !== action.payload.id
        )]
      },
    },
  });

export const todoReducer = todoSlice.reducer;
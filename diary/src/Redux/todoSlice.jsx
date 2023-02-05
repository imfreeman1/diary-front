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
          date: action.payload[1]["locdate"],
          text: action.payload[0]
        }
        state.todos = [...state.todos, todo]
      },
      delTodo: (state, action) => {
        state.todos = [...state.todos.filter((todo)=>
            todo.id !== action.payload.id
        )]
      },
      editTodo: (state, action)=>{
        const editToText = action.payload[0]
        const editToTodo = action.payload[1]
        const findTodo = state.todos.find((todo)=>todo.id===editToTodo.id)
        findTodo.text = editToText
      },
    },
  });

export const todoReducer = todoSlice.reducer;
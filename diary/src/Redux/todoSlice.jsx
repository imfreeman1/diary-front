import { createSlice } from '@reduxjs/toolkit';
import { v4 } from "uuid"


const NAME = 'todoList';

export const todoSlice = createSlice({
    name: NAME,
    initialState: {
      todos: {},
    },
    reducers: {
      setTodo: (state, action) => {
        const date = action.payload.dayInfo["locdate"]
        const todo = {
          id: v4(),
          date: date,
          text: action.payload.text
        }
        if(!state.todos[date]) {
          state.todos[date]=[todo]
        } else state.todos[date] = [...state.todos[date], todo]
      },
      delTodo: (state, action) => {
        const date = action.payload.date
        state.todos[date] = [...state.todos[date].filter((todo)=>
            todo.id !== action.payload.id
        )]
      },
      editTodo: (state, action)=>{
        const date = action.payload.todo.date
        const findTodo = state.todos[date].find((todo)=>todo.id===action.payload.todo.id)
        findTodo.text = action.payload.text
      },
    },
  });

export const todoReducer = todoSlice.reducer;
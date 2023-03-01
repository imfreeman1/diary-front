import { createSlice } from '@reduxjs/toolkit';
import { v4 } from "uuid"

const calNAME = "calendar";

export const calendarSlice = createSlice({
  name: calNAME,
  initialState:{
    calendar:{},
  },
  reducers:{
    setCal: (state, action) => {
      state.calendar = action.payload 
    },
    setTodo: (state, action) => {
      const date = action.payload.dayInfo["locdate"]
      const todo = {
        id: v4(),
        date: date,
        text: action.payload.text
      }
      state.calendar.map((week)=>week.map((day)=>{
        if(day.locdate===date){
          day.todos = [...day.todos, todo]
        }
      }))
    },
    delTodo: (state, action) => {
      const date = action.payload.date
      state.calendar.map((week)=>week.map((day)=>{
        if(day.locdate===date){
          day.todos = [...day.todos.filter((todo)=>
            todo.id !== action.payload.id)]
        }
      }))
    },
    editTodo: (state, action) => {
      const date = action.payload.todo.date
      state.calendar.map((week)=> week.map((day)=>{
        if(day.locdate===date){
          const findTodo = day.todos.find((todo)=>todo.id===action.payload.todo.id)
          findTodo.text = action.payload.text
        }
      }))
    }
  }
}); 

export const calendarReducer = calendarSlice.reducer;
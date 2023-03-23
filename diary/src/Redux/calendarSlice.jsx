import { createSlice } from '@reduxjs/toolkit';
import { v4 } from "uuid"

const calNAME = "calendar";

export const calendarSlice = createSlice({
  name: calNAME,
  initialState:{
    calendar:{},
  },
  reducers:{
    setCal: (state, {payload}) => {
      state.calendar = payload
    },
    setTodo: ({calendar}, {payload: {dayInfo, text}}) => {
      const todo = {
        id: v4(),
        date: dayInfo.locdate,
        text: text
      }
      calendar.map((week)=>week.map((day)=>{
        if(day.locdate===dayInfo.locdate){
          day.todos = [...day.todos, todo]
        }
      }))
    },
    delTodo: ({calendar}, {payload:{date, id}}) => {
      calendar.map((week)=>week.map((day)=>{
        if(day.locdate===date){
          day.todos = [...day.todos.filter((todo)=>
            todo.id !== id)]
        }
      }))
    },
    editTodo: ({calendar}, {payload: {todo, text}}) => {
      calendar.map((week)=> week.map((day)=>{
        if(day.locdate===todo.date){
          const findTodo = day.todos.find((letodo)=>letodo.id===todo.id)
          findTodo.text = text
        }
      }))
    }
  }
}); 

export const calendarReducer = calendarSlice.reducer;
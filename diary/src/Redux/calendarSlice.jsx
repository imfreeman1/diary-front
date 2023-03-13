import { createSlice } from '@reduxjs/toolkit';
import { v4 } from "uuid"

const calNAME = "calendar";

// Month에서 사용되는 슬라이스니 변수명을 고려해보자
export const calendarSlice = createSlice({
  name: calNAME,
  initialState:{
    calendar:{},
  },
  reducers:{
    setCal: (state, {payload}) => {
      state.calendar = payload;
    },
    setTodo: ({calendar}, {payload: {dayInfo, text}}) => {
      const todo = {
        id: v4(),
        date: dayInfo.locdate,
        // todoConents
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

// 반복되는 코드를 줄일수 있을거 같다.
/*
const TodoController =(calendar,payload,callback)=>{
  calendar.map((week)=> week.map((day)=>{
    if(day.locdate===payload.date){
      callback();
    }
  }))
}
*/

export const calendarReducer = calendarSlice.reducer;
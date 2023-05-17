/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */

import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';
import { MONTH_CALENDAR_NAME } from './sliceName';

/**
 * {setCalendar} month calendar 한달 정보
 * {getTodo} 처음 렌더링 시 통신으로 받아온 todo 정보
 * {setTodo} 사용자가 인풋을 입력하면 day의 todos에 todo 입력
 * {delTodo} day의 todos에 해당 todo 삭제
 * {editTodo} 해당 todo 수정, 수정후 day의 todos 배열 순서 고르게 통신 보내기
 */
export const monthCalendarSlice = createSlice({
  name: MONTH_CALENDAR_NAME,
  initialState: {
    monthCalendar: {},
  },
  reducers: {
    setCalendar: (state, { payload }) => {
      state.monthCalendar = payload;
    },
    getTodo: ({ monthCalendar }, { payload: { response } }) => {
      response.map((resDay) => {
        monthCalendar.map((week) => week.map((day) => {
          if (day.locdate === resDay.date) {
            resDay.content.map((content) => {
              const todo = {
                id: v4(),
                date: resDay.date,
                todoContent: content,
              };
              day.todos = [...day.todos, todo];
            });
          }
        }));
      });
    },
    setTodo: ({ monthCalendar }, { payload: { dayInfo, text } }) => {
      const todo = {
        id: v4(),
        date: dayInfo.locdate,
        todoContent: text,
      };
      monthCalendar.map((week) => week.map((day) => {
        if (day.locdate === dayInfo.locdate) {
          day.todos = [...day.todos, todo];
        }
      }));
    },
    delTodo: ({ monthCalendar }, { payload: { date, id } }) => {
      monthCalendar.map((week) => week.map((day) => {
        if (day.locdate === date) {
          day.todos = [...day.todos.filter((todo) => todo.id !== id)];
        }
      }));
    },
    editTodo: ({ monthCalendar }, { payload: { todo, text } }) => {
      monthCalendar.map((week) => week.map((day) => {
        if (day.locdate === todo.date) {
          const findTodo = day.todos.find((getTodo) => getTodo.id === todo.id);
          findTodo.todoContent = text;
        }
      }));
    },
  },
});

export const monthCalendarReducer = monthCalendarSlice.reducer;

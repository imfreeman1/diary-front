export const MONTH_CONST = {
  DAY_OF_WEEK: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  LIST: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
  INDICATING: '월',
  YEAR_INDICATING: '년',
  LAST_DAYS: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  BASIC_SHOW_TODO: 2,
  MAX_SHOW_TODO: 3,
  INPUT_PLACEHOLDER: '입력하세요',
  SHOW_MORE_TODO: (todos) => `일정 ${todos.length - MONTH_CONST.BASIC_SHOW_TODO}개 더보기`,
};

export const GET_MONTH_READ_OPT = (monthDate) => ({
  method: 'GET',
  url: `/monthly/read/${monthDate}`,
});

export const POST_MONTH_WRITE_OPT = (inputText, locdate) => ({
  method: 'post',
  url: '/monthly/write/',
  payload: {
    content: [inputText],
    date: locdate,
  },
});

export const POST_MONTH_UPDATE_OPT = (todos, inputText, locdate) => ({
  method: 'post',
  url: '/monthly/update',
  payload: {
    content: [...todos.map((item) => item.todoContent), inputText],
    date: locdate,
  },
});

export const POST_MONTH_DELETE_OPT = (locdate) => ({
  method: 'post',
  url: '/monthly/delete',
  payload: { date: locdate },
});

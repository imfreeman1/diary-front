export const MONTH_CONST = {
  DAY_OF_WEEK: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  LIST: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
  INDICATING: '월',
  YEAR_INDICATING: '년',
  LAST_DAYS: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  BASIC_SHOW_TODO: 2,
  MAX_SHOW_TODO: 3,
  INPUT_PLACEHOLDER: '입력하세요',
  SHOW_MORE_TODO: (todos) => `일정 ${todos.length - this.BASIC_SHOW_TODO}개 더보기`,

};

/* eslint-disable camelcase */
import { v4 } from 'uuid';

export const WEEKLY_CONST = {
  DAYS_STR_LIST: ['Weekly', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  LOGO: 'Weekly',
  WEEKLY_NUM_DAY_STR: (year, month, week) => `${year}-${month.toString().padStart(2, '0')}-W${week + 1}`,
  NUM_OF_WEEK: (day) => `W-${day}`,
};

export const WEEK_DATA_OBJ = (day) => ({
  day,
  locdate: '',
  textContent: '',
  isEditable: false,
  isWriten: false,
  id: v4(),
});

export const IS_DAY = {
  Mon: true,
};

export const GET_WEEKLY_READ_OPT = (locdate) => ({
  method: 'get',
  url: `/weekly/read/${locdate}`,
});

export const POST_WEEKLY_WRITE_OPT = ({
  locdate, textContent, string_of_week, number_of_week,
}) => ({
  method: 'post',
  url: '/weekly/write/',
  payload: {
    content: textContent,
    date: locdate,
    string_of_week,
    number_of_week,
  },
});

export const POST_WEEKLY_UPDATE_OPT = ({
  locdate, textContent, string_of_week, number_of_week,
}) => ({
  method: 'post',
  url: '/weekly/update',
  payload: {
    content: textContent,
    date: locdate,
    string_of_week,
    number_of_week,
  },
});

export const POST_WEEKLY_DELETE_OPT = ({
  string_of_week, number_of_week,
}) => ({
  method: 'post',
  url: '/weekly/delete',
  payload: {
    string_of_week,
    number_of_week,
  },
});

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

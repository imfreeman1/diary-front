import { MONTH_CONST} from '../Constants/monthlyConstants';

/**
 *
 * @param {dateInDaily} str (0000-00-00)
 * @returns
 */

const makeDaily = (date) => {
  const dateInDaily = new Date(date);

  const dailyContent = {
    locdate: date, day: MONTH_CONST.DAY_OF_WEEK[dateInDaily.getDay()], titleText: '', editorContent: '',
  };
  return dailyContent;
};

export default makeDaily;

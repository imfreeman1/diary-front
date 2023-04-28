import React from 'react';
import { DAY_OF_WEEK } from 'src/Constants/monthlyConstants';

/**
 *
 * @param {dateInDaily} str (0000-00-00)
 * @returns
 */

const useGetDaily = (date) => {
  const dateInDaily = new Date(date);

  /* const dailyContent = {locdate:date,
    day:WEEKDAY[dateInDaily.getDay()],
    titleText:"", editorContent:"" } */
  const dailyContent = {};
  dailyContent.locdate = date;
  dailyContent.day = DAY_OF_WEEK[dateInDaily.getDay()];
  dailyContent.titleText = '';
  dailyContent.editorContent = '';
  return dailyContent;
};

export default useGetDaily;

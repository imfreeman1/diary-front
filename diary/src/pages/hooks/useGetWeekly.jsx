import React from 'react';

/**
 *
 * @param {dateInWeekly} date
 * @returns
 */

const useGetWeekly = (dateInWeekly) => {
  const days = ['Weekly', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const week = dateInWeekly.getDay();
  const calcMon = dateInWeekly.getDate() - week;
  const nextDate = (calc) => {
    const copyDate = new Date(dateInWeekly);
    return new Date(copyDate.setDate(calc));
  };
  const weeklyContent = [];
  for (let i = 0; i < days.length; i++) {
    const weekObj = {};
    weekObj.day = days[i];
    if (i) {
      weekObj.date = calcMon + i;
      weekObj.locdate = nextDate(calcMon + i).toISOString().substring(0, 10);
    } else {
      const weekcontent = nextDate(calcMon);
      weekObj.locdate = `${weekcontent.getFullYear()}-${(weekcontent.getMonth() + 1).toString().padStart(2, '0')}-W${(weekcontent.getDate() / 7 >> 0) + 1}`;
    }
    weekObj.text = '';
    weeklyContent.push(weekObj);
  }
  return weeklyContent;
};

export default useGetWeekly;

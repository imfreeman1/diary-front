import React from 'react';
import { DAYS_WEEKLY } from '../../Constants/weeklyConstant';

/**
 * @param {getMonday} func, 그 주의 월요일 date 리턴 (plusDay=0일때 월요일)
 * @param {getlocWeek} func , 그 주가 몇째주인지를 표현 "2023-03-W3"
 * @param {useGetWeekly} func , weekly페이지의 날짜 정보
 * array [{day: 요일, locdate: '', textContent: ''},{},{}...]
 * @returns
 */
const getMonday = (dateInWeekly, plusDay) => {
  const week = dateInWeekly.getDay();
  const calcMon = dateInWeekly.getDate() - week;
  const nextDate = (calc) => {
    const copyDate = new Date(dateInWeekly);
    return new Date(copyDate.setDate(calc));
  };
  return nextDate(calcMon + plusDay);
};

export const getlocWeek = (dateInWeekly) => {
  const mondayDate = getMonday(dateInWeekly, 0);
  const year = mondayDate.getFullYear();
  const month = mondayDate.getMonth() + 1;
  const weeks = parseInt(mondayDate.getDate() / 7, 10);
  return `${year}-${month.toString().padStart(2, '0')}-W${weeks + 1}`;
};

const useGetWeekly = (dateInWeekly) => {
  const representWeekly = getlocWeek(dateInWeekly);

  let weeklyList = [];
  let plusDay = 0;
  for (const days of DAYS_WEEKLY) {
    const weekObj = { day: days, locdate: '', textContent: '' };
    if (days === 'Weekly') weekObj.locdate = representWeekly;
    else if (days !== 'Weekly') {
      weekObj.locdate = getMonday(dateInWeekly, plusDay).toISOString().substring(0, 10);
    }
    plusDay += 1;
    weeklyList = [...weeklyList, weekObj];
  }
  return weeklyList;
};

export default useGetWeekly;

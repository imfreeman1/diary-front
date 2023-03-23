import React from "react";
import { DAYS_WEEKLY } from "../../Constants/weeklyConstant";

/**
 * @param {dateInWeekly} date
 * @returns
 */

const useGetWeekly = (dateInWeekly) => {
  const week = dateInWeekly.getDay();
  const calcMon = dateInWeekly.getDate() - week;
  const nextDate = (calc) => {
    let copyDate = new Date(dateInWeekly);
    return new Date(copyDate.setDate(calc));
  };
  let weeklyList = [];
  let plusDay = 1;
  for (let days of DAYS_WEEKLY) {
    const weekObj = { day: "", locdate: "", textContent: "" };
    weekObj.day = days;
    if (days === "Weekly") {
      const weekcontent = nextDate(calcMon);
      weekObj.locdate = `${weekcontent.getFullYear()}-${(
        weekcontent.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")}-W${((weekcontent.getDate() / 7) >> 0) + 1}`;
    } else if (days !== "Weekly") {
      weekObj.locdate = nextDate(calcMon + plusDay)
        .toISOString()
        .substring(0, 10);
    }
    plusDay++;
    weeklyList = [...weeklyList, weekObj];
  }
  return weeklyList;
};

export default useGetWeekly;

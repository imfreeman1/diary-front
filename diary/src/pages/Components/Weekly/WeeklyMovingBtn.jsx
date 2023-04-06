import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const WeeklyMovingBtn = ({ selectedDate, setSelectedDate, locThisWeek }) => {
  const moveToWeek = (weekNum) => {
    const dateCalculation = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + weekNum,
      selectedDate.getDate()
    );
    setSelectedDate(dateCalculation);
  };

  const getWeeks = (date) => {
    const calcMon = date.getDate() - date.getDay() + 1;
    const lastDayOfMonth = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();
    const weekArr = [];
    for (let i = calcMon % 7; i <= lastDayOfMonth; i += 7) {
      if (i) weekArr.push(i);
    }
    // console.log(weekArr, calcMon, lastDayOfMonth, date.getMonth());
    return weekArr;
  };

  const weeks = getWeeks(selectedDate);

  const getWeeksfunc = (date, week) => {
    const nextDate = (calcDate) => {
      const copyDate = new Date(calcDate);
      return new Date(copyDate.setDate(week));
    };
    setSelectedDate(nextDate(date));
  };

  return (
    <>
      <div className="flex text-3xl px-6 justify-end gap-5 h-10">
        <BiChevronLeft
          onClick={() => moveToWeek(-1)}
          className="cursor-pointer text-gray-700 hover:text-red-700 hover:ring hover:ring-gray-300"
        />
        <BiChevronRight
          onClick={() => moveToWeek(1)}
          className="cursor-pointer text-gray-700 hover:text-red-700 hover:ring hover:ring-gray-300"
        />
      </div>
      <div className="flex justify-end gap-6 py-2 px-10">
        {weeks.map((week, idx) => {
          if (idx + 1 === locThisWeek.slice(-1) * 1) {
            return (
              <button
                onClick={() => getWeeksfunc(selectedDate, week)}
                className="text-red-500"
              >
                W{idx + 1}
              </button>
            );
          }
          if (idx + 1 !== locThisWeek.slice(-1) * 1) {
            return (
              <button
                onClick={() => getWeeksfunc(selectedDate, week)}
                className="text-black"
              >
                W{idx + 1}
              </button>
            );
          }
        })}
      </div>
    </>
  );
};

export default WeeklyMovingBtn;

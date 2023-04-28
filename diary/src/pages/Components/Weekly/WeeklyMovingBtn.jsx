import React from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { WEEK } from 'src/Constants/weeklyConstant';
import { getMonday } from 'src/pages/Utils/useGetWeekly';
import { setlocWeek, setSelectedWeek } from 'src/Redux/action';

/**
 * 모든 날짜를 월요일로 나타내어 관리하기
 * ++ weekly 페이지에서 주 단위로 이동 가능하게
 * @param {selectedDateInWeek} str store에 저장된 현재 날짜 정보
 * @param {locThisWeek} str, 몇째주인지를 나타냄 ex."2023-03-W3"
 * @param {moveToWeek} func, selectedDateInWeek를 저번달, 다음달로 바꿈
 */

const WeeklyMovingBtn = ({ locThisWeek }) => {
  const { selectedDateInWeek } = useSelector((state) => state.weeklyReducer);
  const dispatch = useDispatch();

  const moveToWeek = (nextWeek) => {
    const dateConv = new Date(selectedDateInWeek);
    const dateCalculation = new Date(
      dateConv.getFullYear(),
      dateConv.getMonth() + nextWeek,
      dateConv.getDate(),
    );
    const dateConvStr = getMonday(dateCalculation, 1)
      .toISOString()
      .substring(0, 10);
    dispatch(setSelectedWeek(dateConvStr));
  };

  const getWeeks = (date) => {
    const dateConv = new Date(date);
    const calcMon = dateConv.getDate() - dateConv.getDay() + 1;
    const lastDayOfMonth = new Date(
      dateConv.getFullYear(),
      dateConv.getMonth() + 1,
      0,
    ).getDate();
    const weekArr = [];
    for (let mon = calcMon % 7; mon <= lastDayOfMonth; mon += 7) {
      if (mon) weekArr.push(mon);
    }
    return weekArr;
  };

  const weeks = getWeeks(selectedDateInWeek);

  const getWeeksfunc = (date, week) => {
    const nextDate = (calcDate) => {
      const copyDate = new Date(calcDate);
      return new Date(copyDate.setDate(week));
    };
    const nextMondayStr = getMonday(nextDate(date), 1)
      .toISOString()
      .substring(0, 10);
    dispatch(setSelectedWeek(nextMondayStr));
  };

  return (
    <div className="flex justify-end">
      <div className="flex justify-end gap-6 py-2 px-10">
        {weeks.map((mondayOfWeek, idx) => (
          <button
            onClick={() => getWeeksfunc(selectedDateInWeek, mondayOfWeek)}
            className={`${
              locThisWeek.slice(-1) * 1 === idx + 1
                ? 'text-red-500'
                : 'text-black'
            } hover:ring hover:ring-gray-300`}
          >
            {WEEK}
            {idx + 1}
          </button>
        ))}
      </div>
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
    </div>
  );
};

export default WeeklyMovingBtn;

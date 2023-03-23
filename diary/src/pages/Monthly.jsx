import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiCaretUp, BiCaretDown } from 'react-icons/bi';
import { v4 } from 'uuid';
import { setCal } from '@/Redux/action';
import MonthWeekPresenter from './Components/Month/MonthWeek/MonthWeekPresenter';
import useMonthCalendar from './Utils/useMonthCalendar';
import {
  DAY_OF_WEEK,
  MONTH_LIST,
  MONTH_INDICATING,
} from '../Constants/monthlyConstants';

/**
 * @param {selectedMonth} number, 기본 날짜는 현재 월 (0-11)
 * @returns
 */

function MonthlyPage() {
  const dateInMonth = new Date();
  const [yearInMonth, setYearInMonth] = useState(dateInMonth.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(dateInMonth.getMonth());

  const dispatch = useDispatch();
  const { monthCalendar } = useSelector((state) => state.monthCalendarReducer);

  useEffect(() => {
    dispatch(setCal(useMonthCalendar(yearInMonth, MONTH_LIST[selectedMonth])));
  }, [selectedMonth]);

  const moveToLastMonth = () => {
    if (selectedMonth > 0) setSelectedMonth(selectedMonth - 1);
    else {
      setSelectedMonth(selectedMonth + 11);
      setYearInMonth(yearInMonth - 1);
    }
  };
  const moveToNextMonth = () => {
    if (selectedMonth < 11) setSelectedMonth(selectedMonth + 1);
    else {
      setSelectedMonth(selectedMonth - 11);
      setYearInMonth(yearInMonth + 1);
    }
  };

  return (
    <div className="flex justify-center pt-5 h-screen w-full bg-gray-100">
      <div className="bg-zinc-50 m-5 h-fit border">
        <div className="flex bg-zinc-50 gap-5">
          <div className="text-3xl w-min px-6 my-auto">
            <BiCaretUp
              onClick={() => moveToNextMonth()}
              className="cursor-pointer text-gray-700 hover:text-red-700 hover:ring hover:ring-gray-300"
            />
            <BiCaretDown
              onClick={() => moveToLastMonth()}
              className="cursor-pointer text-gray-700 hover:text-red-700 hover:ring hover:ring-gray-300"
            />
          </div>
          <p className="text-5xl w-fit px-6 m-3 text-gray-700 select-none">
            {selectedMonth + 1}
            {MONTH_INDICATING}
          </p>
          <p className="text-2xl text-green-900 select-none">{yearInMonth}</p>
        </div>
        <div className="flex my-2 border-2">
          {DAY_OF_WEEK.map((day) => (
            <div
              className={`flex border w-36 text-lg font-bold justify-center ${
                day === 'Sun' ? 'text-[#FF0000]' : ''
              }`}
              key={v4()}
            >
              {day[0]}
            </div>
          ))}
        </div>
        <table className="border-collapse border border-gray-500">
          {monthCalendar.length
            ? monthCalendar.map((week) => (
              <MonthWeekPresenter key={v4()} week={week} />
            ))
            : null}
        </table>
      </div>
    </div>
  );
}

export default MonthlyPage;

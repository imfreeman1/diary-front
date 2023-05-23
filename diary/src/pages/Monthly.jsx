/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiCaretUp, BiCaretDown } from 'react-icons/bi';
import { v4 } from 'uuid';
import StickerDisplay from 'src/Components/StickerDisplay/StickerDisplay';
import useAxios from 'src/hooks/useAxios';
import useGetDateOffset from 'src/hooks/useGetDateOffset';
import {
  getTodo,
  setCalendar,
  setMoveToLastMonth,
  setMoveToNextMonth,
} from '../Redux/action';
import MonthWeekPresenter from '../Components/Month/MonthWeek/MonthWeekPresenter';
import makeMonthCalendar from '../Utils/makeMonthCalendar';
import {
  DAY_OF_WEEK,
  MONTH_LIST,
  MONTH_INDICATING,
} from '../Constants/monthlyConstants';
import NavBarContainer from '../Components/NavBar/NavBarContainer';
import SideBarContainer from '../Components/SideBar/SideBarContainer';

/**
 * @param {selectedMonth} number, 기본 날짜는 현재 월 (0-11)
 * @returns
 */

const Monthly = () => {
  const { yearInMonth, selectedMonth } = useSelector(
    (state) => state.monthSelectorReducer,
  );
  const dispatch = useDispatch();
  const { monthCalendar } = useSelector((state) => state.monthCalendarReducer);
  // month, year 바뀔 때 마다 calendar를 새로 불러오게 함
  const controlCalendar = makeMonthCalendar(yearInMonth, MONTH_LIST[selectedMonth]);
  const startDay = new Date(yearInMonth, selectedMonth, 1);
  const monthDate = useGetDateOffset(startDay);

  const {
    response, error, loading, operation,
  } = useAxios();
  const getReadMonthlyAxios = () => {
    operation({
      method: 'get',
      url: `/monthly/read/${monthDate}`,
    });
  };
  useEffect(() => {
    dispatch(setCalendar(controlCalendar));
    getReadMonthlyAxios();
  }, [dispatch, selectedMonth, yearInMonth]);

  useEffect(() => {
    if (response?.code === 'MDAR10001') { dispatch(getTodo({ response: response.result })); }
  }, [dispatch, response]);

  const moveToLastMonth = () => {
    dispatch(setMoveToLastMonth());
  };
  const moveToNextMonth = () => {
    dispatch(setMoveToNextMonth());
  };
  return (
    <>
      <NavBarContainer />
      <StickerDisplay pageDate={startDay} />
      {loading ? null
        : (
          <div className="flex justify-center p-10 h-full w-full bg-gray-100">
            <div className="bg-zinc-50 border p-2 my-10 h-fit shadow-lg rounded">
              <div className="flex gap-5">
                <div className="text-3xl w-min px-6 my-auto">
                  <BiCaretUp
                    onClick={moveToNextMonth}
                    className="cursor-pointer text-gray-700 hover:text-green-800 hover:ring hover:ring-gray-400"
                  />
                  <BiCaretDown
                    onClick={moveToLastMonth}
                    className="cursor-pointer text-gray-700 hover:text-green-800 hover:ring hover:ring-gray-400"
                  />
                </div>
                <p className="text-5xl w-fit px-6 m-3 text-gray-700 select-none">
                  {selectedMonth + 1}
                  {MONTH_INDICATING}
                </p>
                <p className="text-2xl text-green-900 select-none">{yearInMonth}</p>
              </div>
              <div className="flex my-2 border-2 border-y-green-900">
                {DAY_OF_WEEK.map((day) => (
                  <div
                    className={`flex border w-36 text-lg font-bold justify-center bg-gray-200 ${
                      day === 'Sun' ? 'text-red-500' : ''
                    }`}
                    key={v4()}
                  >
                    {day[0]}
                  </div>
                ))}
              </div>
              <table className="border-collapse border border-green-900">
                {monthCalendar.length
                  ? monthCalendar.map((week) => (
                    <MonthWeekPresenter key={v4()} week={week} />
                  ))
                  : null}
              </table>
            </div>
          </div>
          <table className="border-collapse border border-green-900">
            {monthCalendar.length
              ? monthCalendar.map((week) => (
                <MonthWeekPresenter key={v4()} week={week} />
              ))
              : null}
          </table>
        </div>
      </div>
      <SideBarContainer pageDate={startDay} />
    </>
  );
};

export default Monthly;

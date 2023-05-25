/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiCaretLeft, BiCaretRight } from 'react-icons/bi';
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
import { MONTH_CONST } from '../Constants/monthlyConstants';
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
  const controlCalendar = makeMonthCalendar(yearInMonth, MONTH_CONST.LIST[selectedMonth]);
  const firstDayInMonth = controlCalendar[0].find((date) => date.isInMonth === true).locdate;
  const startDay = new Date(yearInMonth, selectedMonth, 1);
  const monthDate = useGetDateOffset(startDay);

  const {
    response, loading, operation,
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
      <NavBarContainer yearInMonth={yearInMonth} />
      <StickerDisplay pageDate={firstDayInMonth} />
      {loading ? null
        : (
          <div className="flex justify-center p-10 h-full w-full bg-orange-100">
            <BiCaretLeft
              onClick={moveToLastMonth}
              size="100"
              className="cursor-pointer mt-20 text-gray-700 hover:text-orange-700"
            />
            <div className="bg-zinc-50 border p-10 my-10 h-fit shadow-lg rounded ">
              <div className="flex justify-between gap-5 mx-10">
                <div className="flex">
                  <div className="w-fit h-fit p-2 px-5 border-4 border-gray-200 font-bold text-5xl rounded-full shadow">
                    <p className="text-gray-700 select-none">{yearInMonth}</p>
                  </div>
                  <p className="text-4xl font-semibold w-fit px-6 m-3 my-auto text-gray-700 select-none">
                    {selectedMonth + 1}
                    {MONTH_CONST.INDICATING}
                  </p>
                </div>
                <div className="flex flex-col justify-end text-3xl w-min px-6" />
              </div>
              <div className="flex m-10">
                {MONTH_CONST.DAY_OF_WEEK.map((day) => (
                  <div
                    className={`flex flex-grow text-lg font-bold justify-center w-40 ${
                      day === 'Sun' ? 'text-red-500' : ''
                    } ${
                      day === 'Sat' ? 'text-blue-500' : ''
                    } `}
                    key={v4()}
                  >
                    {day}
                  </div>
                ))}
              </div>
              <table className="border-collapse m-10 mt-0">
                {monthCalendar.length
                  ? monthCalendar.map((week) => (
                    <MonthWeekPresenter key={v4()} week={week} />
                  ))
                  : null}
              </table>
              <SideBarContainer pageDate={firstDayInMonth} />
            </div>
            <BiCaretRight
              onClick={moveToNextMonth}
              size="100"
              className="cursor-pointer mt-20 text-gray-700 hover:text-orange-700"
            />
          </div>
        )}
    </>
  );
};

export default Monthly;

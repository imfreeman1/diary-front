/* eslint-disable camelcase */
/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StickerDisplay from 'src/Components/StickerDisplay/StickerDisplay';
import WeeklyAxiosNetwork from 'src/network/weekly';
import DatepickerComponent from '../Components/DatepickerComponent/DatepickerComponentContainer';
import makeWeekly, { getlocWeek } from '../Utils/makeWeekly';
import {
  setWeeklyIsWriten,
  setlocWeek, setSelectedWeek, setWeekly,
} from '../Redux/action';
import { IS_DAY, WEEKLY_CONST } from '../Constants/weeklyConstant';
import WeeklyDisplayContainer from '../Components/Weekly/WeeklyDisplayContainer';
import NavBarContainer from '../Components/NavBar/NavBarContainer';
import SideBarContainer from '../Components/SideBar/SideBarContainer';
import WeeklyJumpButtonContainer from '../Components/WeeklyJumpButton/WeeklyJumpButtonContainer';
import useGetDateOffset from '../hooks/useGetDateOffset';

/**
 * 모든 날짜를 월요일로 나타내어 관리하기
 * @param {selectedDate} date datepicker에 쓰는 변수
 * @param {selectedDateInWeek} str store에 저장된 현재 날짜 정보 "0000-00-00"
 * @param {currentWeeklyPage, weeklyContents} object, 이 주의 날짜 정보
 * selectedDate가 바뀌면 dispatch함
 * [{"locdate":"", day:"", textContent:""},{}...]
 * @param {locThisWeek} str, 몇째주인지를 나타냄 ex."2023-03-W3"
 * @component <DatepickerComponent/> selectedDate를 달력의 해당 날짜로 바꿈
 */

const WeeklyPage = () => {
  const dispatch = useDispatch();
  const { selectedDateInWeek } = useSelector((state) => state.weeklyReducer);
  const locThisWeek = getlocWeek(selectedDateInWeek);
  const currentWeeklyPage = makeWeekly(selectedDateInWeek);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const offsetDate = useGetDateOffset(selectedDate);
  const mondayInWeek = currentWeeklyPage.find(({ day }) => IS_DAY[day]).locdate;
  const currWeeklyContents = useSelector(
    ({ weeklyReducer }) => weeklyReducer.weeklyContents[WEEKLY_CONST.NUM_OF_WEEK(locThisWeek)],
  );
  // datepicker로 인한 날짜 변경 시, selectedDateInWeek를 선택한 date로 변경 (offset+str 변환)
  useEffect(() => {
    dispatch(setSelectedWeek(offsetDate));
  }, [selectedDate]);

  useEffect(() => {
    dispatch(setWeekly({ currentWeeklyPage, locWeek: locThisWeek }));
    dispatch(setlocWeek(locThisWeek));
    WeeklyAxiosNetwork.Read(locThisWeek).then(({ result }) => {
      result.map(({ number_of_week, content }) => {
        dispatch(setWeeklyIsWriten({
          content,
          idx: number_of_week,
          isWriten: true,
          locThisWeek,
        }));
      });
    });
  }, [selectedDateInWeek]);

  return (
    <>
      <NavBarContainer yearInMonth={selectedDate.getFullYear()} />
      <StickerDisplay pageDate={mondayInWeek} />
      <div className="h-full w-full bg-[#9DBC9D] text-center p-10">

        <div className="bg-white w-fit h-fit border my-10 mx-auto shadow-lg rounded">
          <div className="text-2xl font-bold text-left ml-5 flex flex-row">
            <span className="text-black border-4 rounded-full p-2 bg-white">
              {WEEKLY_CONST.LOGO}

            </span>
            <DatepickerComponent
              isWeekly
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              inputStyle="text-green-900  p-2"
            />
          </div>
          <WeeklyJumpButtonContainer locThisWeek={locThisWeek} />
          <div className="m-3 mx-5 grid grid-cols-4">
            {currWeeklyContents
              && currWeeklyContents.map((day, idx) => (
                <WeeklyDisplayContainer
                  key={day.id}
                  idx={idx}
                  day={day}
                />
              ))}
          </div>
        </div>
      </div>
      <SideBarContainer pageDate={mondayInWeek} />
    </>
  );
};

export default React.memo(WeeklyPage);

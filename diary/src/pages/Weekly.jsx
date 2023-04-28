import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
import { setlocWeek, setWeekly } from 'src/Redux/action';
import { WEEKLY_LOGO } from 'src/Constants/weeklyConstant';
import { CURRENT_ROUTER_PATH } from 'src/Constants/constants';
import DatepickerComponent from './Components/DatepickerComponent/DatepickerComponent';
import useGetWeekly, { getlocWeek } from './Utils/useGetWeekly';
import WeeklyDisplayContainer from './Components/Weekly/WeeklyDisplayContainer';
import NavBarContainer from './Components/NavBar/NavBarContainer';
import SideBarContainer from './Components/SideBar/SideBarContainer';
import StickerContainer from './Components/Sticker/StickerContainer';
import WeeklyMovingBtn from './Components/Weekly/WeeklyMovingBtn';

/**
 * 모든 날짜를 월요일로 나타내어 관리하기
 * @param {selectedDate} date
 * @param {selectedDateInWeek} str store에 저장된 현재 날짜 정보 "0000-00-00"
 * @param {currentWeeklyPage, weeklyContents} object, 이 주의 날짜 정보
 * selectedDate가 바뀌면 dispatch함
 * [{"locdate":"", day:"", textContent:""},{}...]
 * @param {locThisWeek} str, 몇째주인지를 나타냄 ex."2023-03-W3"
 * @component <DatepickerComponent/> selectedDate를 달력의 해당 날짜로 바꿈
 */

const WeeklyPage = () => {
  const { selectedDateInWeek } = useSelector((state) => state.weeklyReducer);
  const date = new Date();
  const [selectedDate, setSelectedDate] = useState(date);
  const dispatch = useDispatch();

  const currentWeeklyPage = useGetWeekly(selectedDateInWeek);
  const locThisWeek = getlocWeek(selectedDateInWeek);
  const stickerList = useSelector(
    (state) => state.stickerReducer.stickersArray,
  );
  const currRouter = CURRENT_ROUTER_PATH();
  const weeklyContents = useSelector(
    (state) => state.weeklyReducer.weeklyContents[`W-${locThisWeek}`],
  );
  useEffect(() => {
    dispatch(setlocWeek(locThisWeek));
  });
  useEffect(() => {
    dispatch(setWeekly({ currentWeeklyPage, locWeek: locThisWeek }));
  }, [dispatch, selectedDateInWeek]);

  const weeklyHighlight = useSelector(
    (state) => state.weeklyReducer.weeklyContents,
  );
  const weeklyHighlightArr = Object.keys(weeklyHighlight)
    .filter((key) => key !== 'currlocWeek')
    .map((item) => new Date(weeklyHighlight[item][1].locdate));
  console.log(weeklyHighlight, weeklyHighlightArr);

  return (
    <>
      <NavBarContainer />
      {stickerList[currRouter]?.map((sticker) => (
        <StickerContainer
          imgURL={sticker.imgURL}
          key={v4()}
          id={sticker.id}
          position={{
            positionX: sticker.positionX,
            positionY: sticker.positionY,
          }}
          width={sticker.width}
          height={sticker.height}
          selected={sticker.selected}
        />
      ))}
      <div className="h-full w-full bg-[#9DBC9D] text-center p-10">
        <DatepickerComponent
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          highlightDatesArr={weeklyHighlightArr}
        />
        <div className="bg-white w-fit h-fit border my-10 mx-auto shadow-lg rounded">
          <div className="text-2xl font-bold text-left ml-5">
            <span className="text-black border-4 rounded-full p-2 bg-white">
              {WEEKLY_LOGO}
            </span>
            <span className="text-green-900 p-2">
              {locThisWeek.slice(0, -3)}
            </span>
          </div>
          <WeeklyMovingBtn locThisWeek={locThisWeek} />

          <div className="m-3 mx-5 grid grid-cols-4">
            {weeklyContents
              ? weeklyContents.map((day, i) => (
                <WeeklyDisplayContainer
                  key={day.id}
                  idx={i}
                  day={day}
                />
              ))
              : null}
          </div>
        </div>
      </div>
      <SideBarContainer />
    </>
  );
};

export default WeeklyPage;

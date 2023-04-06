import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DatepickerComponent from "./Components/DatepickerComponent/DatepickerComponent";
import useGetWeekly, { getlocWeek } from "./Utils/useGetWeekly";
import { setlocWeek, setWeekly } from "@/Redux/action";
import { WEEKLY_LOGO } from "@/Constants/weeklyConstant";
import WeeklyDisplayContainer from "./Components/Weekly/WeeklyDisplayContainer";
import NavBarContainer from "./Components/NavBar/NavBarContainer";
import SideBarContainer from "./Components/SideBar/SideBarContainer";
import StickerContainer from "./Components/Sticker/StickerContainer";
import { CURRENT_ROUTER_PATH } from "@/Constants/constants";
import { v4 } from "uuid";
import WeeklyMovingBtn from "./Components/Weekly/WeeklyMovingBtn";
/**
 * @param {dateInWeekly} date
 * @param {selectedDate} date
 * @param {currentWeekly, weeklyContent} object, 이 주의 날짜 정보
 * selectedDate가 바뀌면 dispatch함
 * [{"locdate":"", day:"", textContent:""},{}...]
 * @param {locThisWeek} str, 몇째주인지를 나타냄 ex."2023-03-W3"
 * @param {moveToWeek} func, selectedDate를 전주와 다음주로 바꿈
 * @component <DatepickerComponent/> selectedDate를 달력의 해당 날짜로 바꿈
 */

const WeeklyPage = () => {
  const dateInWeekly = new Date();
  const [selectedDate, setSelectedDate] = useState(dateInWeekly);
  const currentWeekly = useGetWeekly(selectedDate);
  const locThisWeek = getlocWeek(selectedDate);
  const stickerList = useSelector(
    (state) => state.stickerReducer.stickersArray
  );
  const currRouter = CURRENT_ROUTER_PATH();
  const dispatch = useDispatch();
  const weeklyContents = useSelector(
    (state) => state.weeklyReducer.weeklyContents[`W-${locThisWeek}`]
  );
  useEffect(() => {
    dispatch(setlocWeek(locThisWeek));
  });
  useEffect(() => {
    dispatch(setWeekly({ currentWeekly, locWeek: locThisWeek }));
  }, [dispatch, selectedDate]);

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
        />
        <div className="w-fit h-fit rounded border-2 bg-white shadow-sm my-10 mx-auto">
          <div className="text-2xl font-bold text-left ml-5">
            <span className="text-black border-4 rounded-full p-2 bg-white">
              {WEEKLY_LOGO}
            </span>
            <span className="text-green-900 p-2">{locThisWeek}</span>
          </div>
          <WeeklyMovingBtn
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            locThisWeek={locThisWeek}
          />

          <div className="m-3 mx-5 grid grid-cols-4 shadow">
            {weeklyContents
              ? weeklyContents.map((day, i) => (
                  <WeeklyDisplayContainer key={day.id} idx={i} day={day} />
                ))
              : null}
          </div>
        </div>
        <SideBarContainer />
      </div>
    </>
  );
};

export default WeeklyPage;

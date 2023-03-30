import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
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
/**
 * @param {dateInWeekly} date
 * @param {selectedDate} date
 * @param {currentWeekly, weeklyContent} object, 이 주의 날짜 정보
 * selectedDate가 바뀌면 dispatch함
 * [{"locdate":"", day:"", textContent:""},{}...]
 * @param {locThisWeek} str, 몇째주인지를 나타냄 ex."2023-03-W3"
 * @param {moveToWeek} func, selectedDate를 전주와 다음주로 바꿈
 * @component <DatepickerComponent/> selectedDate를 달력의 해당 날짜로 바꿈
 * @returns
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
  const weeklyContent = useSelector(
    (state) => state.weeklyReducer.weeklyContent[`W-${locThisWeek}`]
  );

  useEffect(() => {
    dispatch(setlocWeek(locThisWeek));
  });

  useEffect(() => {
    dispatch(setWeekly({ currentWeekly, locWeek: locThisWeek }));
  }, [dispatch, selectedDate]);

  const moveToWeek = (weekNum) => {
    const dateCalculation = new Date(
      selectedDate.setDate(selectedDate.getDate() + weekNum)
    );
    setSelectedDate(dateCalculation);
  };
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
          <div className="flex text-3xl px-6 justify-end gap-5 h-10">
            <BiChevronLeft
              onClick={() => moveToWeek(-7)}
              className="cursor-pointer text-gray-700 hover:text-red-700 hover:ring hover:ring-gray-300"
            />
            <BiChevronRight
              onClick={() => moveToWeek(7)}
              className="cursor-pointer text-gray-700 hover:text-red-700 hover:ring hover:ring-gray-300"
            />
          </div>
          <div className="m-3 mx-5 grid grid-cols-4 shadow">
            {weeklyContent
              ? weeklyContent.map((day, i) => (
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

import { setWeekText } from "@/Redux/action";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
/**
 * @param {day} obj
 * @returns
 */

const WeeklyDisplay = ({ idx, selectedDate }) => {
  const weekly = useSelector((state) => state.weeklyReducer.weeklyContent[idx]);
  console.log(weekly);
  // const weekContentRef = useRef();
  // const [weekContent, setWeekContent] = useState("");
  const dispatch = useDispatch();
  const weekContentsTimer = useRef(null);

  const debounce = (idx, time, timer) => {
    if (timer.current) clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      dispatch(setWeekText({ content: weekContent, idx }));
      timer.current = null;
    }, time);
  };

  const initContent = weekly
    ? weekly.textContent
      ? weekly.textContent
      : ""
    : "";

  useEffect(() => {
    // setWeekContent(initContent);
  }, [selectedDate]);

  // useEffect(() => {
  //   if (weekContent) dispatch(setWeekText({ content: weekContent, idx: idx }));
  // }, [weekContent]);

  const handleInput = (e) => {
    // console.log(weekContent);
    // setWeekContent(e.target.value);
    dispatch(setWeekText({ content: e.target.value, idx }));
    // debounce(idx, 1000, weekContentsTimer);
  };

  return (
    <div className="relative w-[250px] h-[450px] bg-white rounded-xl border-2 border-black border-dashed">
      <div className="absolute m-3 w-5 h-5 border-2 border-black rounded-full" />
      <div className="text-xl font-bold mt-10">{weekly.day}</div>
      <textarea
        spellCheck="false"
        id={v4()}
        value={weekly.textContent}
        onInput={handleInput}
        className="block min-h-[200px] max-h-[200px] mt-5 mx-auto p-4 border-4 overflow-hidden rounded-lg"
      />
      <div className="absolute bottom-0 right-0 m-3 text-sm text-gray-400">
        {weekly.locdate}
      </div>
    </div>
  );
};

export default WeeklyDisplay;

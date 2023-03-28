import React, {
  useEffect, useRef, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
import { setTextContent } from '@/Redux/action';
/**
 * @param {day} obj
 * @returns
 */
const WeeklyDisplay = ({ idx, locThisWeek }) => {
  const weekly = useSelector((state) => state.weeklyReducer.weeklyContent[`W-${locThisWeek}`][idx]);
  const [weekText, setWeekText] = useState('');
  const dispatch = useDispatch();
  const weekContentsTimer = useRef(null);
  const weekTextContent = useSelector((state) => state.weeklyReducer.weeklyContent[`W-${locThisWeek}`][idx].textContent);

  const debounce = (index, contents, locThisWeek, time, timer) => {
    if (timer.current) clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      dispatch(setTextContent({ content: contents, idx: index, locThisWeek }));
      timer.current = null;
    }, time);
  };

  useEffect(() => {
    debounce(idx, weekText, locThisWeek, 1000, weekContentsTimer);
  }, [weekText]);

  const handleChange = (e) => {
    setWeekText(e.target.value);
    // dispatch(setWeekText({ content: e.target.value, idx, locThisWeek }));
    console.log('id', e.target.id, idx, typeof (e.target.id), typeof (`${idx}`));
  };

  return (
    <div className="relative w-[250px] h-[450px] bg-white rounded-xl border-2 border-black border-dashed">
      <div className="absolute m-3 w-5 h-5 border-2 border-black rounded-full" />
      <div className="text-xl font-bold mt-10">{weekly.day}</div>
      <textarea
        spellCheck="false"
        id={v4()}
        value={weekText}
        onChange={handleChange}
        className="block min-h-[200px] max-h-[200px] mt-5 mx-auto p-4 border-4 overflow-hidden rounded-lg"
      />
      <div className="absolute bottom-0 right-0 m-3 text-sm text-gray-400">
        {weekly.locdate}
      </div>
    </div>
  );
};

export default WeeklyDisplay;

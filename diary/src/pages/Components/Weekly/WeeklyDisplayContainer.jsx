import React, {
  useEffect, useRef, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { setTextContent } from '@/Redux/action';
import WeeklyDisplayPresenter from './WeeklyDisplayPresenter';
/**
 * @param {idx} number, 배열의 idx (0-7)
 * @param {currentlocWeek} str, "2023-03-W3"
 * @param {weekly} obj, 해당 요일의 정보 {day:"", locdate:"", textContent:""}
 * @param {weekTextContent} str 해당 요일의 textContent
 *
 * @returns
 */
const WeeklyDisplayContainer = ({ idx }) => {
  const { currentlocWeek } = useSelector((state) => state.weeklyReducer.weeklyContent);
  const weekly = useSelector((state) => state.weeklyReducer.weeklyContent[`W-${currentlocWeek}`][idx]);
  const dispatch = useDispatch();
  const weekTextContent = useSelector((state) => state.weeklyReducer.weeklyContent[`W-${currentlocWeek}`][idx].textContent);
  const weekContentsTimer = useRef(null);

  const handleChange = (e) => {
    // debounce(idx, e.target.value, currentlocWeek, 1000, weekContentsTimer);
    dispatch(setTextContent({ content: e.target.value, idx, locThisWeek: currentlocWeek }));
  };

  return (
    <WeeklyDisplayPresenter
      weekly={weekly}
      weekTextContent={weekTextContent}
      handleChange={handleChange}
    />
  );
};

WeeklyDisplayContainer.propTypes = {
  idx: PropTypes.number,
};

const debounce = (index, contents, locThisWeek, time, timer) => {
  if (timer.current) clearTimeout(timer.current);

  timer.current = setTimeout(() => {
    dispatch(setTextContent({ content: contents, idx: index, locThisWeek }));
    timer.current = null;
  }, time);
};

export default WeeklyDisplayContainer;

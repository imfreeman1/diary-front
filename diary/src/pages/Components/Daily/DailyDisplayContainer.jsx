import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useGetDaily from '@/pages/Utils/useGetDaily';
import { setDaily, setTitle } from '@/Redux/action';
import DailyDisplayPresenter from './DailyDisplayPresenter';

/**
 * @param {selectedDate} date
 * @param {dailyContent} obj
 * @returns
 */

function DailyDisplayContainer() {
  const dispatch = useDispatch();
  const { currentDate } = useSelector(
    (state) => state.dailyReducer.dailyContent,
  );
  const currentDaily = useSelector(
    (state) => state.dailyReducer.dailyContent[`D-${currentDate}`],
  );
  const initContent = currentDaily?.titleText ? currentDaily.titleText : '';
  const [content, setContent] = useState('');

  const getDaily = useGetDaily(currentDate);

  useEffect(() => {
    if (currentDate) dispatch(setDaily(getDaily));
    setContent(initContent);
  }, [currentDate, dispatch]);

  useEffect(() => {
    dispatch(setTitle({ titleText: content, locdate: currentDate }));
  }, [dispatch, content]);

  const handleInput = (e) => {
    setContent(e.target.value);
  };

  return (
    <DailyDisplayPresenter
      currentDaily={currentDaily}
      content={content}
      handleInput={handleInput}
    />
  );
}

export default DailyDisplayContainer;

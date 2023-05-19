/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import makeDaily from 'src/Utils/makeDaily';
import { setDaily, setTitle } from 'src/Redux/action';
import PropTypes from 'prop-types';
import DailyDisplayPresenter from './DailyDisplayPresenter';
/**
 * @param {dailyContents} obj daily 페이지의 정보
 * @param {currentDate} str 현재 선택된 날짜 "0000-00-00"
 * @returns
 */

function DailyDisplayContainer({
  setIsSave, resTitle, resContent, selectedDate, setSelectedDate,
}) {
  const dispatch = useDispatch();

  const { currentDate } = useSelector(
    (state) => state.dailyReducer.dailyContents,
  );
  const Daily = useSelector(
    (state) => state.dailyReducer.dailyContents[`D-${currentDate}`],
  );
  const initContent = resTitle;
  const [content, setContent] = useState(initContent);

  // currentDate가 바뀌면 daily 페이지 재렌더링
  const getDaily = makeDaily(currentDate);
  useEffect(() => {
    if (currentDate) dispatch(setDaily(getDaily));
  }, [dispatch, currentDate]);

  useEffect(() => {
    dispatch(setTitle({ locdate: currentDate, titleText: content }));
  }, [dispatch, currentDate, content]);

  useEffect(() => {
    setContent(initContent);
  }, [initContent, currentDate]);

  const handleInput = (e) => {
    setContent(e.target.value);
    setIsSave(false);
  };

  return (
    <DailyDisplayPresenter
      Daily={Daily || {}}
      content={content}
      handleInput={handleInput}
      setIsSave={setIsSave}
      resContent={resContent}
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
    />
  );
}

DailyDisplayContainer.propTypes = {
  setIsSave: PropTypes.func.isRequired,
  resTitle: PropTypes.string.isRequired,
  resContent: PropTypes.string.isRequired,
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  setSelectedDate: PropTypes.func.isRequired,
};
export default DailyDisplayContainer;

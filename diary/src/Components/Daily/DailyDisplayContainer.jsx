/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useGetDaily from 'src/Utils/useGetDaily';
import { setDaily, setTitle } from 'src/Redux/action';
import PropTypes from 'prop-types';
import DailyDisplayPresenter from './DailyDisplayPresenter';
/**
 * @param {dailyContents} obj daily 페이지의 정보
 * @param {currentDate} str 현재 선택된 날짜 "0000-00-00"
 * @returns
 */

function DailyDisplayContainer({ setIsSave, resTitle, resContent }) {
  const dispatch = useDispatch();

  const { currentDate } = useSelector(
    (state) => state.dailyReducer.dailyContents,
  );
  const Daily = useSelector(
    (state) => state.dailyReducer.dailyContents[`D-${currentDate}`],
  );
  const initContent = resTitle;
  const [content, setContent] = useState('');

  // currentDate가 바뀌면 daily 페이지 재렌더링
  const getDaily = useGetDaily(currentDate);
  useEffect(() => {
    if (currentDate) dispatch(setDaily(getDaily));
  }, [dispatch, currentDate]);

  // 처음만 저장된 title 있으면 불러오게
  useEffect(() => {
    dispatch(setTitle({ locdate: currentDate, titleText: content }));
  }, [dispatch, currentDate, content]);

  useEffect(() => {
    setContent(initContent);
    if (Daily?.titleText) setContent(Daily.titleText);
  }, [currentDate]);

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
    />
  );
}

DailyDisplayContainer.propTypes = {
  setIsSave: PropTypes.func.isRequired,
  resTitle: PropTypes.string.isRequired,
  resContent: PropTypes.string.isRequired,
};
export default DailyDisplayContainer;

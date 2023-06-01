/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDailyIsWriten, setTitle } from 'src/Redux/action';
import PropTypes from 'prop-types';
import { DAILY_CONST } from 'src/Constants/dailyConstant';
import DailyDisplayPresenter from './DailyDisplayPresenter';
/**
 * @param {dailyContents} obj daily 페이지의 정보
 * @param {currentDate} str 현재 선택된 날짜 "0000-00-00"
 * @returns
 */

function DailyDisplayContainer({ selectedDate, setSelectedDate }) {
  const dispatch = useDispatch();

  const [currentDate, isWriten, titleText, dailyInfo] = useSelector(
    ({ dailyReducer: { dailyContents } }) => [
      dailyContents.currentDate,
      dailyContents[DAILY_CONST.MARK(dailyContents.currentDate)]?.isWriten,
      dailyContents[DAILY_CONST.MARK(dailyContents.currentDate)]?.titleText,
      dailyContents[DAILY_CONST.MARK(dailyContents.currentDate)],
    ],
  );

  const handleInput = ({ target }) => {
    dispatch(setTitle({ locdate: currentDate, titleText: target.value }));
    if (isWriten) dispatch(setDailyIsWriten({ isWriten: false }));
  };

  return (
    <DailyDisplayPresenter
      dailyInfo={dailyInfo || {}}
      titleText={titleText || ''}
      handleInput={handleInput}
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
    />
  );
}

DailyDisplayContainer.propTypes = {
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  setSelectedDate: PropTypes.func.isRequired,
};
export default DailyDisplayContainer;

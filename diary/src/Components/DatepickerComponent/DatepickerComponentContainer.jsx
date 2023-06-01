import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DatepickerComponentPresenter from './DatepickerComponentPresenter';

/**
 *
 * @param {selectedDate} date
 * @param {setSelectedDate} func
 * @returns
 */
const DatepickerComponentContainer = ({
  isWeekly,
  selectedDate,
  setSelectedDate,
  highlightDatesArr,
  inputStyle,
}) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <DatepickerComponentPresenter
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
      highlightDatesArr={highlightDatesArr}
      inputStyle={inputStyle}
      isShow={isShow}
      handleClose={setIsShow}
      isWeekly={isWeekly}
    />
  );
};

DatepickerComponentContainer.propTypes = {
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  setSelectedDate: PropTypes.func.isRequired,
  highlightDatesArr: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  inputStyle: PropTypes.string.isRequired,
  isWeekly: PropTypes.bool.isRequired,
};

DatepickerComponentContainer.defaultProps = {
  highlightDatesArr: [],
};
export default DatepickerComponentContainer;

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
  inputStyle,
}) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <DatepickerComponentPresenter
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
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
  inputStyle: PropTypes.string.isRequired,
  isWeekly: PropTypes.bool.isRequired,
};

export default DatepickerComponentContainer;

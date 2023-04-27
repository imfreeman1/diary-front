import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
// import { ko } from 'date-fns/esm/locale';
import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types';
import DatepickerCustomInput from './DatepickerCustomInput';

/**
 *
 * @param {selectedDate} date
 * @param {setSelectedDate} func
 * @returns
 */
const DatepickerComponent = ({
  selectedDate,
  setSelectedDate,
  highlightDatesArr,
}) => {
  const [show, setShow] = useState(false);
  const handleClose = (state) => {
    setShow(state);
  };
  const handleChange = (dateItem) => {
    setSelectedDate(dateItem);
  };

  return (
    <div className="absolute inset-y-0 left-0">
      <DatePicker
        selected={selectedDate}
        onChange={handleChange}
        highlightDates={highlightDatesArr}
        show={show}
        setShow={handleClose}
        dateFormat="yyyy년 MM월 dd일"
        dateFormatCalendar="yyyy년 MM월"
        customInput={<DatepickerCustomInput />}
      />
    </div>
  );
};

DatepickerComponent.propTypes = {
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  setSelectedDate: PropTypes.func.isRequired,
  highlightDatesArr: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
};

DatepickerComponent.defaultProps = {
  highlightDatesArr: [],
};
export default DatepickerComponent;

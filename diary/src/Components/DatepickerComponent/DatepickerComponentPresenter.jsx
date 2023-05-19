import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
// import DatepickerCustomInput from './DatepickerCustomInput';
import 'react-datepicker/dist/react-datepicker.css';
// import { ko } from 'date-fns/esm/locale';

const DatepickerComponentPresenter = ({
  selectedDate, highlightDatesArr, isShow, handleChange, handleClose, isWeekly,
}) => (
  <span className={isWeekly ? 'text-green-900  p-2' : 'absolute inset-y-11 left-0'}>
    <DatePicker
      selected={selectedDate}
      onChange={handleChange}
      highlightDates={highlightDatesArr}
      show={isShow}
      setShow={handleClose}
      dateFormat={isWeekly ? 'yyyy년 MM월 ' : 'yyyy년 MM월 dd일'}
      dateFormatCalendar="yyyy년 MM월"
      // customInput={<DatepickerCustomInput />}
    />
  </span>
);
DatepickerComponentPresenter.propTypes = {
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  highlightDatesArr: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  isShow: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  isWeekly: PropTypes.bool.isRequired,
};

DatepickerComponentPresenter.defaultProps = {
  highlightDatesArr: [],
};
export default DatepickerComponentPresenter;

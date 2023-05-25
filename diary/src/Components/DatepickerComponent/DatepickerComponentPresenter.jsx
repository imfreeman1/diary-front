import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import DatepickerCustomInput from '../DatepickerCustom/DatepickerCustomInput';
import DatepickerRenderDayContents from '../DatepickerCustom/DatepickerRenderDayContents';
import DatepickerRenderCustomHeader from '../DatepickerCustom/DatepickerRenderCustomHeader';
// import { ko } from 'date-fns/esm/locale';

const DatepickerComponentPresenter = ({
  selectedDate, highlightDatesArr, inputStyle, isShow, handleChange, handleClose, isWeekly,
}) => (
  <DatePicker
    selected={selectedDate}
    onChange={handleChange}
    highlightDates={highlightDatesArr}
    show={isShow}
    setShow={handleClose}
    customInput={<DatepickerCustomInput inputStyle={inputStyle} />}
    renderDayContents={DatepickerRenderDayContents}
    renderCustomHeader={DatepickerRenderCustomHeader}
    withPortal
    portalId="root-portal"
    dateFormat={isWeekly ? 'yyyy년 MM월 ' : 'yyyy-MM-dd'}
    dateFormatCalendar="yyyy년 MM월"
  />
);
DatepickerComponentPresenter.propTypes = {
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  highlightDatesArr: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  isShow: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  inputStyle: PropTypes.string.isRequired,
  isWeekly: PropTypes.bool.isRequired,
};

DatepickerComponentPresenter.defaultProps = {
  highlightDatesArr: [],
};
export default DatepickerComponentPresenter;

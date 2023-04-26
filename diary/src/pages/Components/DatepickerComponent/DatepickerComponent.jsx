import React, { forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from 'react-redux';
import { BiCalendar } from 'react-icons/bi';
import { setSelectedWeek } from '@/Redux/action';

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
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = (state) => {
    setShow(state);
  };
  const handleChange = (selectedDate) => {
    setSelectedDate(selectedDate);
    dispatch(setSelectedWeek(selectedDate));
  };
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button
      className="flex bg-translate border-double border-4 border-black m-1 p-2 px-5 rounded shadow-inner"
      onClick={onClick}
      ref={ref}
    >
      <p className="">{value}</p>
      <BiCalendar size="20" />
    </button>
  ));
  return (
    <div className="absolute inset-y-0 left-0">
      <DatePicker
        selected={selectedDate}
        onChange={handleChange}
        highlightDates={highlightDatesArr}
        show={show}
        setShow={handleClose}
        customInput={<ExampleCustomInput />}
      />
    </div>
  );
};

export default DatepickerComponent;

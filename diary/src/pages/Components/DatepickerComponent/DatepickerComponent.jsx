import React, { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
/**
 *
 * @param {selectedDate} date
 * @param {setSelectedDate} func
 * @returns
 */
const DatepickerComponent = ({ selectedDate, setSelectedDate }) => {
  const [show, setShow] = useState(false);
  const handleClose = (state) => {
    setShow(state);
  };
  const handleChange = (selectedDate) => {
    setSelectedDate(selectedDate);
  };
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button
      className="bg-gray-200 border-2 shadow-md p-2 px-5 rounded"
      onClick={onClick}
      ref={ref}
    >
      {value}
    </button>
  ));
  return (
    <div className="absolute inset-y-0 left-0">
      <DatePicker
        selected={selectedDate}
        onChange={handleChange}
        highlightDates={[new Date()]}
        show={show}
        setShow={handleClose}
        customInput={<ExampleCustomInput />}
      />
    </div>
  );
};

export default DatepickerComponent;

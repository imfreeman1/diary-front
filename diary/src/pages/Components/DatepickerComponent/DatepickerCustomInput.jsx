import React, { forwardRef } from 'react';
import { BiCalendar } from 'react-icons/bi';

const DatepickerCustomInput = forwardRef(({ value, onClick }, ref) => (
  <button
    className="flex bg-translate border-double border-4 border-black m-1 p-2 px-5 rounded shadow-inner"
    onClick={onClick}
    ref={ref}
    type="button"
  >
    <p className="">
      {value}
      f
    </p>
    <BiCalendar size="20" />
  </button>
));
export default DatepickerCustomInput;

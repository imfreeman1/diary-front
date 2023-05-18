import React from 'react';
import { getMonth, getYear } from 'date-fns';
import range from 'lodash/range';
import PropTypes from 'prop-types';
import { MONTHS, MONTH_INDICATING, YEAR_INDICATING } from 'src/Constants/monthlyConstants';

const DatepickerRenderCustomHeader = ({
  date,
  changeYear,
  changeMonth,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}) => {
  const years = range(2023, getYear(new Date()) + 1, 1);

  return (
    <div className="flex p-5 justify-around bg-red-100">
      <button
        type="button"
        onClick={decreaseMonth}
        disabled={prevMonthButtonDisabled}
        className="text-lg font-bold text-red-800"
      >
        {'<'}
      </button>
      <select
        value={getYear(date)}
        onChange={({ target: { value } }) => changeYear(value)}
        className="text-lg"
      >
        {years.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <span className="text-lg">{YEAR_INDICATING}</span>
      <select
        value={MONTHS[getMonth(date)]}
        onChange={({ target: { value } }) => changeMonth(MONTHS.indexOf(value))}
        className="text-lg"
      >
        {MONTHS.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <span className="text-lg">{MONTH_INDICATING}</span>
      <button
        type="button"
        onClick={increaseMonth}
        disabled={nextMonthButtonDisabled}
        className="text-xl font-bold text-red-800"
      >
        {'>'}
      </button>
    </div>
  );
};
DatepickerRenderCustomHeader.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  changeYear: PropTypes.func.isRequired,
  changeMonth: PropTypes.func.isRequired,
  decreaseMonth: PropTypes.func.isRequired,
  increaseMonth: PropTypes.func.isRequired,
  prevMonthButtonDisabled: PropTypes.bool.isRequired,
  nextMonthButtonDisabled: PropTypes.bool.isRequired,
};
export default DatepickerRenderCustomHeader;

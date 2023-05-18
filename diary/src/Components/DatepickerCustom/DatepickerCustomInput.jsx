import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const DatepickerCustomInput = forwardRef(({ value, onClick, inputStyle }, ref) => {
  console.log(inputStyle);
  return (
    <div className={`${inputStyle}}`}>
      <button
        className="bg-translate shadow-inner"
        onClick={onClick}
        ref={ref}
        type="button"
      >
        <p>{value}</p>
      </button>
    </div>
  );
});

DatepickerCustomInput.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
  inputStyle: PropTypes.string,
};
DatepickerCustomInput.defaultProps = {
  value: '',
  onClick: PropTypes.isNotNull,
  inputStyle: PropTypes.isNotNull,
};
export default DatepickerCustomInput;

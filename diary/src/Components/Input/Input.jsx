import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  placeholder, value, onChange, className, required, inputRef,
}) => {
  console.log('in Input', inputRef);
  return (
    <input
      placeholder={placeholder}
      value={value}
      ref={inputRef}
      onChange={onChange}
      className={className}
      required={required}
    />
  );
};
Input.defaultProps = {
  required: false,
  className: '',
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  required: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  inputRef: PropTypes.object.isRequired,
};
export default React.memo(Input);

import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  onClick, content, className, disabled = false,
}) => (
  <button
    className={`cursor-pointer ${className}`}
    onClick={onClick}
    type="button"
    disabled={disabled}
  >
    {content}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  content: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Button;

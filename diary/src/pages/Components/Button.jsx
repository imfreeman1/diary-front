import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  onClick, content, className, disabled,
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

Button.defaultProps = {
  disabled: null,
  className: '',
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  content: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,

};

export default Button;

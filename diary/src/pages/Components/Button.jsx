import React from 'react';

const Button = ({
  onClick, content, className, type, disabled,
}) => (
  <button
    className={`cursor-pointer ${className}`}
    onClick={onClick}
    type={type}
    disabled={disabled}
  >
    {content}
  </button>
);

export default Button;

import React from 'react';
import PropTypes from 'prop-types';

/**
 *
 * @param {onClick} func
 * @param {disabled} bool
 * @param {content} str icon 컴포넌트
 * @returns
 */

const WeeklyEditorMenuBarButton = ({
  onClick, disabled, className, content,
}) => (
  <button
    type="button"
    onClick={() => onClick()}
    disabled={disabled}
    className={`outline-none focus:outline-none border-r border-gray-200 flex justify-center items-center flex-1 h-10 hover:text-indigo-500 active:bg-gray-50 ${className}`}
  >
    {content}
  </button>
);
WeeklyEditorMenuBarButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  className: PropTypes.string,
  content: PropTypes.element.isRequired,
};

WeeklyEditorMenuBarButton.defaultProps = {
  disabled: true,
  className: '',
};
export default WeeklyEditorMenuBarButton;

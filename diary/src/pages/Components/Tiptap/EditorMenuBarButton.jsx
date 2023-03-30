import React from 'react';
import PropTypes from 'prop-types';

/**
 *
 * @param {onClick} func
 * @param {disabled} boolean
 * @param {content} str
 * @returns
 */

const EditorMenuBarButton = ({
  onClick, disabled, className, content,
}) => (
  <button
    type="button"
    onClick={() => onClick()}
    disabled={disabled}
    className={`outline-none focus:outline-none border-r border-gray-200 w-14 h-10 hover:text-indigo-500 active:bg-gray-50 ${className}`}
  >
    {content}
  </button>
);
EditorMenuBarButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.boolean,
  className: PropTypes.string,
  content: PropTypes.object,
};
export default EditorMenuBarButton;

/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { BiX } from 'react-icons/bi';
import PropTypes from 'prop-types';
import { MONTH_CONST } from '../../../Constants/monthlyConstants';

const MonthInputModalPresenter = ({
  locdate,
  inputModalVisible,
  inputModalRef,
  handleInputModalClose,
  // onChildDbclick,
  inputText,
  focusRef,
  setInputText,
  handleKeyPress,
}) => ((inputModalVisible && locdate) && (
  <div
    onDoubleClick={({ stopPropagation }) => stopPropagation()}
    ref={inputModalRef}
    className="z-0 absolute inset-x-auto w-96 h-fit bg-white text-right select-none rounded drop-shadow-2xl"
  >
    <div className="flex m-3 justify-end">
      <BiX
        size="25"
        onClick={() => handleInputModalClose()}
        className="rounded cursor-pointer hover:bg-gray-200"
      />
    </div>
    <div className="text-left m-10">
      <form onSubmit={handleKeyPress}>
        <span>■ </span>
        <input
          placeholder={MONTH_CONST.INPUT_PLACEHOLDER}
          value={inputText}
          ref={focusRef}
          onChange={({ target }) => setInputText(target.value)}
          className="text-xl m-1 pl-2 border-b-2"
          required
        />
      </form>
    </div>
  </div>
));
MonthInputModalPresenter.propTypes = {
  locdate: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  inputModalVisible: PropTypes.bool.isRequired,
  inputModalRef: PropTypes.shape({ current: PropTypes.object }).isRequired,
  handleInputModalClose: PropTypes.func.isRequired,
  inputText: PropTypes.string.isRequired,
  focusRef: PropTypes.shape({ current: PropTypes.object }).isRequired,
  setInputText: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
};
export default MonthInputModalPresenter;

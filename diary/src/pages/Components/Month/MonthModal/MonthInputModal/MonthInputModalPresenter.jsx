import React from 'react';
import { BiX } from 'react-icons/bi';
import PropTypes from 'prop-types';
import { INPUT_PLACEHOLDER } from '@/Constants/monthlyConstants';

const MonthInputModalPresenter = ({
  dayInfo,
  inputModalVisible,
  inputModalRef,
  handleInputModalClose,
  onChildDbclick,
  inputText,
  focusRef,
  handleChange,
  handleKeyPress,
}) => (inputModalVisible && dayInfo.locdate ? (
  <div
    onDoubleClick={onChildDbclick}
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
          placeholder={INPUT_PLACEHOLDER}
          value={inputText}
          ref={focusRef}
          onChange={handleChange}
          className="text-xl m-1 pl-2 border-b-2"
        />
      </form>
    </div>
  </div>
) : null);

MonthInputModalPresenter.propTypes = {
  dayInfo: PropTypes.object,
  inputModalVisible: PropTypes.bool.isRequired,
  inputModalRef: PropTypes.object,
  handleInputModalClose: PropTypes.func,
  onChildDbclick: PropTypes.func,
  inputText: PropTypes.string,
  focusRef: PropTypes.object,
  handleChange: PropTypes.func,
  handleKeyPress: PropTypes.func,
};
export default MonthInputModalPresenter;

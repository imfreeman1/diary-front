import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setTodo } from 'src/Redux/action';
import MonthInputModalPresenter from './MonthInputModalPresenter';
/**
 *
 * @param {dayInfo} obj
 * @param {inputModalVisible} boolean
 * @param {handleInputModalClose} func
 * @returns
 */

function MonthInputModalContainer({
  dayInfo,
  inputModalVisible,
  handleInputModalClose,
  inputModalRef,
}) {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState('');
  const focusRef = useRef();

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleKeyPress = (e) => {
    e.preventDefault();
    dispatch(setTodo({ text: inputText, dayInfo }));
    setInputText('');
    handleInputModalClose();
  };

  useEffect(() => {
    if (inputModalVisible) focusRef.current.focus();
  }, [inputModalVisible]);

  const onChildDbclick = (e) => {
    e.stopPropagation();
  };

  return (
    <MonthInputModalPresenter
      dayInfo={dayInfo}
      inputModalVisible={inputModalVisible}
      handleInputModalClose={handleInputModalClose}
      inputModalRef={inputModalRef}
      onChildDbclick={onChildDbclick}
      inputText={inputText}
      focusRef={focusRef}
      handleChange={handleChange}
      handleKeyPress={handleKeyPress}
    />
  );
}

MonthInputModalContainer.propTypes = {
  dayInfo: PropTypes.object,
  inputModalVisible: PropTypes.bool,
  handleInputModalClose: PropTypes.func,
  inputModalRef: PropTypes.object,
};
export default MonthInputModalContainer;

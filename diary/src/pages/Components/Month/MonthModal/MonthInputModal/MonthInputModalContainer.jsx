import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setTodo } from "@/Redux/action";
import MonthInputModalPresenter from "./MonthInputModalPresenter";
import PropTypes from "prop-types";
/**
 *
 * @param {dayInfo} obj
 * @param {inputModalVisible} boolean
 * @param {handleInputModalClose} func
 * @returns
 */

const MonthInputModalContainer = ({
  dayInfo,
  inputModalVisible,
  handleInputModalClose,
  inputModalRef,
}) => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");
  const focusRef = useRef();

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleKeyPress = (e) => {
    e.preventDefault();
    dispatch(setTodo({ text: inputText, dayInfo: dayInfo }));
    setInputText("");
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
};

MonthInputModalContainer.propTypes = {
  dayInfo: PropTypes.object,
  inputModalVisible: PropTypes.bool,
  handleInputModalClose: PropTypes.func,
  inputModalRef: PropTypes.object,
};
export default MonthInputModalContainer;

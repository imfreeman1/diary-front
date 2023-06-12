/* eslint-disable react/forbid-prop-types */
import React, {
  useEffect, useRef, useState,
} from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setTodo } from 'src/Redux/action';
import useAxios from 'src/hooks/useAxios';
import { POST_MONTH_UPDATE_OPT, POST_MONTH_WRITE_OPT } from 'src/Constants/monthlyConstants';
import MonthInputModalPresenter from './MonthInputModalPresenter';
/**
 *
 * @param {dayInfo} obj 모달이 선택된 날짜 객체 정보
 * @param {inputModalVisible} boolean input modal의 on/off 상태
 * @param {handleInputModalClose} func 모달창을 끄게함
 * @returns
 */

function MonthInputModalContainer({
  locdate,
  todos,
  inputModalVisible,
  handleInputModalClose,
  inputModalRef,
}) {
  const dispatch = useDispatch();
  const { operation } = useAxios();
  const [inputText, setInputText] = useState('');
  const focusRef = useRef(null);
  const handleKeyPress = (e) => {
    e.preventDefault();
    if (inputText.trim() !== '') {
      dispatch(setTodo({ text: inputText, locdate }));
      if (todos.length >= 1) { operation(POST_MONTH_UPDATE_OPT(todos, inputText, locdate)); }
      if (todos.length === 0) { operation(POST_MONTH_WRITE_OPT(inputText, locdate)); }
      setInputText('');
      handleInputModalClose();
    }
  };
  useEffect(() => {
    if (inputModalVisible) focusRef.current.focus();
  }, [inputModalVisible]);

  return (
    <MonthInputModalPresenter
      locdate={locdate}
      inputModalVisible={inputModalVisible}
      handleInputModalClose={handleInputModalClose}
      inputModalRef={inputModalRef}
      inputText={inputText}
      focusRef={focusRef}
      setInputText={setInputText}
      handleKeyPress={handleKeyPress}
    />
  );
}

MonthInputModalContainer.propTypes = {
  locdate: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    todoContent: PropTypes.string.isRequired,
  })).isRequired,
  inputModalVisible: PropTypes.bool.isRequired,
  handleInputModalClose: PropTypes.func.isRequired,
  inputModalRef: PropTypes.shape({ current: PropTypes.object }).isRequired,
};
export default MonthInputModalContainer;

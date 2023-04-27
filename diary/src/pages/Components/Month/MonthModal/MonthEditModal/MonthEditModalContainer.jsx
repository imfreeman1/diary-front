import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { delTodo, editTodo } from './src/Redux/action';
import MonthEditModalPresenter from './MonthEditModalPresenter';

/**
 * @param {todo} obj {text, id date}
 * @param {dayInfo} obj
 * @param {itemVisible} boolean
 * @param {handleItemModalClose} func
 * @returns
 */

function MonthEditModalContainer({
  todo,
  dayInfo,
  editModalVisible,
  handleEditModalClose,
  editModalRef,
}) {
  const dispatch = useDispatch();

  const [isEdited, setIsEdited] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const focusRef = useRef();

  const handleEditKeyPress = (e) => {
    e.preventDefault();
    dispatch(editTodo({ text: editText, todo }));
    setIsEdited(false);
  };
  const handleEditText = (e) => {
    setEditText(e.target.value);
  };
  const onDelete = (todo) => {
    dispatch(delTodo(todo));
  };

  useEffect(() => {
    if (editModalVisible && isEdited) focusRef.current.focus();
  }, [editModalVisible, isEdited]);

  const onChildDbclick = (e) => {
    e.stopPropagation();
  };
  return (
    <MonthEditModalPresenter
      todo={todo}
      dayInfo={dayInfo}
      editModalVisible={editModalVisible}
      handleEditModalClose={handleEditModalClose}
      editModalRef={editModalRef}
      handleEditKeyPress={handleEditKeyPress}
      onDelete={onDelete}
      onChildDbclick={onChildDbclick}
      setIsEdited={setIsEdited}
      isEdited={isEdited}
      editText={editText}
      focusRef={focusRef}
      handleEditText={handleEditText}
    />
  );
}

MonthEditModalContainer.propTypes = {
  todo: PropTypes.object,
  dayInfo: PropTypes.object,
  editModalVisible: PropTypes.bool,
  handleEditModalClose: PropTypes.func,
  editModalRef: PropTypes.object,
};
export default MonthEditModalContainer;

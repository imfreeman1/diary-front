/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
import React, {
  useEffect, useRef, useState,
} from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { delTodo, editTodo } from 'src/Redux/action';
import useAxios from 'src/hooks/useAxios';
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
  const [editText, setEditText] = useState(todo.todoContent);
  const focusRef = useRef(null);

  const {
    response, error, loading, operation,
  } = useAxios();

  const postUpdateMonthlyAxios = ({
    type, text, todoItem,
  }) => {
    const editTodoList = dayInfo.todos.map((getTodo) => {
      if (getTodo.id === todoItem.id) return text;
      return getTodo.todoContent;
    });

    const deleteTodoList = dayInfo.todos
      .filter((findTodo) => findTodo.id !== todoItem.id)
      .map((getTodo) => getTodo.todoContent);

    operation({
      method: 'post',
      url: '/monthly/update',
      payload: {
        content: type === 'updateTodo' ? editTodoList : deleteTodoList,
        date: todoItem.date,
      },
    });
  };
  const postDeleteMonthlyAxios = ({ date }) => {
    operation({
      method: 'post',
      url: '/monthly/delete',
      payload: { date },
    });
  };
  const handleEditKeyPress = (e) => {
    e.preventDefault();
    dispatch(editTodo({ text: editText, todo }));
    postUpdateMonthlyAxios({ type: 'updateTodo', text: editText, todoItem: todo });
    setIsEdited(false);
  };
  const handleEditText = (e) => {
    setEditText(e.target.value);
  };
  const onDelete = (item) => {
    if (dayInfo.todos.length >= 2) postUpdateMonthlyAxios({ type: 'deleteTodo', todoItem: item });
    if (dayInfo.todos.length === 1)postDeleteMonthlyAxios({ date: item.date });
    dispatch(delTodo(item));
  };

  useEffect(() => {
    if (editModalVisible && isEdited) focusRef.current.focus();
  }, [editModalVisible, isEdited]);

  return (
    <MonthEditModalPresenter
      todo={todo}
      dayInfo={dayInfo}
      editModalVisible={editModalVisible}
      handleEditModalClose={handleEditModalClose}
      editModalRef={editModalRef}
      handleEditKeyPress={handleEditKeyPress}
      onDelete={onDelete}
      setIsEdited={setIsEdited}
      isEdited={isEdited}
      editText={editText}
      focusRef={focusRef}
      handleEditText={handleEditText}
    />
  );
}

MonthEditModalContainer.propTypes = {
  dayInfo: PropTypes.shape({
    date: PropTypes.number.isRequired,
    dateName: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
    isHoliday: PropTypes.bool.isRequired,
    isInMonth: PropTypes.bool.isRequired,
    locdate: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
      date: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      todoContent: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
  todo: PropTypes.shape({
    date: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    todoContent: PropTypes.string.isRequired,
  }).isRequired,
  editModalVisible: PropTypes.bool.isRequired,
  handleEditModalClose: PropTypes.func.isRequired,
  editModalRef: PropTypes.shape({ current: PropTypes.object }).isRequired,
};
export default MonthEditModalContainer;

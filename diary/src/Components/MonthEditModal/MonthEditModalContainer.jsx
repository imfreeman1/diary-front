/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
import React, {
  useEffect, useRef, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { delTodo, editTodo } from 'src/Redux/action';
import useAxios from 'src/hooks/useAxios';
import { convertDayOfWeek } from 'src/Utils/makeWeekly';
import { POST_MONTH_DELETE_OPT, POST_MONTH_UPDATE_OPT } from 'src/Constants/monthlyConstants';
import MonthEditModalPresenter from './MonthEditModalPresenter';

/**
 * @param {todo} obj {text, id date}
 * @param {dayInfo} obj
 * @param {itemVisible} boolean
 * @param {handleItemModalClose} func
 * @returns
 */

// todos
function MonthEditModalContainer({
  todo,
  locdate,
  editModalVisible,
  handleEditModalClose,
  editModalRef,
}) {
  const dispatch = useDispatch();
  const focusRef = useRef(null);
  const { operation } = useAxios();
  const [isEdited, setIsEdited] = useState(false);
  const [editText, setEditText] = useState(todo.todoContent);
  const [week, dayIdx] = convertDayOfWeek(locdate);
  const { todos } = useSelector(({ monthCalendarReducer }) => (
    monthCalendarReducer.monthCalendar[week][dayIdx]));

  const postUpdateMonthlyAxios = ({
    type, text, todoItem,
  }) => {
    const editTodoList = todos.map((findTodo) => {
      if (findTodo.id === todoItem.id) return text;
      return findTodo.todoContent;
    });

    const deleteTodoList = todos
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

  const handleEditKeyPress = (e) => {
    e.preventDefault();
    dispatch(editTodo({ text: editText, todo }));
    postUpdateMonthlyAxios({ type: 'updateTodo', text: editText, todoItem: todo });
    setIsEdited(false);
  };
  const onDelete = (item) => {
    if (todos.length >= 2) postUpdateMonthlyAxios({ type: 'deleteTodo', todoItem: item });
    if (todos.length === 1) operation(POST_MONTH_DELETE_OPT(item.date));
    dispatch(delTodo(item));
  };

  useEffect(() => {
    if (editModalVisible && isEdited) focusRef.current.focus();
  }, [editModalVisible, isEdited]);

  return (
    <MonthEditModalPresenter
      todo={todo}
      locdate={locdate}
      editModalVisible={editModalVisible}
      handleEditModalClose={handleEditModalClose}
      editModalRef={editModalRef}
      handleEditKeyPress={handleEditKeyPress}
      onDelete={onDelete}
      setEditText={setEditText}
      setIsEdited={setIsEdited}
      isEdited={isEdited}
      editText={editText}
      focusRef={focusRef}
    />
  );
}

MonthEditModalContainer.propTypes = {
  locdate: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
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

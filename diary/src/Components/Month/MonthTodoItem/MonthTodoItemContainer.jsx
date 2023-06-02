import React from 'react';
import PropTypes from 'prop-types';
import useControlModal from '../../../hooks/useControlModal';
import MonthTodoItemPresenter from './MonthTodoItemPresenter';

/**
 * @param {todo} obj {text, date, id}
 * @param {dayInfo} obj {날짜정보, ...}
 * @param {ctrEditModal}
 * { modalVisible: boolean, modalRef:modalRef, handleModalOpen: {f}, handleModalClose: {f} }
 * @returns
 */

// isInMonth
const MonthTodoItemContainer = ({ todo, locdate, isInMonth }) => {
  const ctrEditModal = useControlModal(isInMonth);
  return (
    <MonthTodoItemPresenter
      locdate={locdate}
      todo={todo}
      ctrEditModal={ctrEditModal}
    />
  );
};

MonthTodoItemContainer.propTypes = {
  isInMonth: PropTypes.bool.isRequired,
  locdate: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  todo: PropTypes.shape({
    date: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    todoContent: PropTypes.string.isRequired,
  }).isRequired,
};
export default MonthTodoItemContainer;

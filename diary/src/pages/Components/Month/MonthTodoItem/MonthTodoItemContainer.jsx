import React from 'react';
import PropTypes from 'prop-types';
import useControlModal from 'src/pages/hooks/useControlModal';
import MonthTodoItemPresenter from './MonthTodoItemPresenter';

/**
 * @param {todo} obj {text, date, id}
 * @param {dayInfo} obj {날짜정보, ...}
 * @param {ctrEditModal}
 * { modalVisible: boolean, modalRef:modalRef, handleModalOpen: {f}, handleModalClose: {f} }
 * @returns
 */

const MonthTodoItemContainer = ({ todo, dayInfo }) => {
  const ctrEditModal = useControlModal(dayInfo);
  return (
    <MonthTodoItemPresenter
      todo={todo}
      dayInfo={dayInfo}
      ctrEditModal={ctrEditModal}
    />
  );
};

MonthTodoItemContainer.propTypes = {
  todo: PropTypes.object,
  dayInfo: PropTypes.object,
};
export default MonthTodoItemContainer;

/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import MonthEditModalContainer from '../MonthModal/MonthEditModal/MonthEditModalContainer';

/**
 * @param {todo} obj {text, date, id}
 * @param {dayInfo} obj {날짜정보, ...}
 * @param {ctrEditModal}
 * { modalVisible: boolean, modalRef:modalRef, handleModalOpen: {f}, handleModalClose: {f} }
 * @returns
 */

const MonthTodoItemPresenter = ({
  dayInfo, todo, ctrEditModal,
}) => (
  <>
    <div
      key={v4()}
      onClick={() => ctrEditModal.handleModalOpen()}
      aria-hidden
      className="block truncate p-1 pl-2 my-2.5 mx-0.5 text-gray-800 bg-gradient-to-t from-orange-100 from-10% via-pink-100 via-50% to-red-100 to-80% shadow-inner rounded hover:text-black hover:from-pink-200 hover:to-red-200 hover:cursor-pointer"
    >
      {todo.todoContent}
    </div>
    <MonthEditModalContainer
      dayInfo={dayInfo}
      todo={todo}
      editModalVisible={ctrEditModal.modalVisible}
      handleEditModalClose={ctrEditModal.handleModalClose}
      editModalRef={ctrEditModal.modalRef}
    />
  </>
);

MonthTodoItemPresenter.propTypes = {
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
  ctrEditModal: PropTypes.shape({
    modalVisible: PropTypes.bool,
    modalRef: PropTypes.shape({ current: PropTypes.object }).isRequired,
    handleModalOpen: PropTypes.func.isRequired,
    handleModalClose: PropTypes.func.isRequired,
  }).isRequired,
};

export default MonthTodoItemPresenter;

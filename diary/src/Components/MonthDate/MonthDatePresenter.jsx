/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import MonthTodoContainer from '../MonthTodo/MonthTodoContainer';
import MonthInputModalContainer from '../MonthInputModal/MonthInputModalContainer';

// MonthTodo : 입력한 투두 나타냄
// MonthInputModal : 더블 클릭 -> input창 열림

/**
 * @param {ctrInputModal}
 * { modalVisible: boolean, modalRef:modalRef, handleModalOpen: {f}, handleModalClose: {f} }
 * @returns
 */

const MonthDatePresenter = ({ dayInfo, ctrInputModal }) => (
  <td
    onDoubleClick={ctrInputModal.handleModalOpen}
    className="static w-40 h-40 border border-slate-500 rounded"
  >
    <div
      className={`pl-1 text-left border-dashed border-b-2 border-slate-500 ${
        dayInfo.isHoliday ? 'text-red-500' : 'text-black'
      } ${dayInfo.isInMonth ? '' : 'text-gray-400 bg-opacity-0 border-none'}`}
    >
      <span>{dayInfo.date}</span>
      <span className="text-sm ml-1">{dayInfo.dateName}</span>
    </div>
    {dayInfo.isInMonth && (
      <MonthTodoContainer
        isInMonth={dayInfo.isInMonth}
        todos={dayInfo.todos}
        day={dayInfo.day}
        locdate={dayInfo.locdate}
      />
    )}
    <MonthInputModalContainer
      locdate={dayInfo.locdate}
      todos={dayInfo.todos}
      inputModalVisible={ctrInputModal.modalVisible}
      handleInputModalClose={ctrInputModal.handleModalClose}
      inputModalRef={ctrInputModal.modalRef}
    />
  </td>
);
MonthDatePresenter.propTypes = {
  dayInfo: PropTypes.shape({
    date: PropTypes.number.isRequired,
    dateName: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
    isHoliday: PropTypes.bool.isRequired,
    isInMonth: PropTypes.bool.isRequired,
    locdate: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        todoContent: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
  ctrInputModal: PropTypes.shape({
    modalVisible: PropTypes.bool,
    modalRef: PropTypes.shape({ current: PropTypes.object }).isRequired,
    handleModalOpen: PropTypes.func.isRequired,
    handleModalClose: PropTypes.func.isRequired,
  }).isRequired,
};

export default React.memo(MonthDatePresenter);

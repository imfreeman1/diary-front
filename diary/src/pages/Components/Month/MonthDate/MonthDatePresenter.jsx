import React from 'react';
import PropTypes from 'prop-types';
import MonthTodoContainer from '../MonthTodo/MonthTodoContainer';
import MonthInputModalContainer from '@/pages/Components/Month/MonthModal/MonthInputModal/MonthInputModalContainer';

// MonthTodo : 입력한 투두 나타냄
// MonthInputModal : 더블 클릭 -> input창 열림

/**
 * @param {ctrInputModal}
 * { modalVisible: boolean, modalRef:modalRef, handleModalOpen: {f}, handleModalClose: {f} }
 * @returns
 */

const MonthDatePresenter = ({ dayInfo, ctrInputModal }) => (
  <td
    onDoubleClick={() => ctrInputModal.handleModalOpen()}
    className="static w-36 h-40 border border-green-900"
  >
    <div
      className={`pl-1 text-left border-b-2 border-green-800 bg-gray-900 bg-opacity-10 ${
        dayInfo.isInMonth
          ? dayInfo.isHoliday
            ? 'text-red-500'
            : 'text-black'
          : 'text-gray-400 bg-opacity-0 border-none'
      }`}
    >
      <span>{dayInfo.date}</span>
      <span className="text-sm ml-1">{dayInfo.dateName}</span>
    </div>
    <MonthTodoContainer dayInfo={dayInfo} />
    <MonthInputModalContainer
      dayInfo={dayInfo}
      inputModalVisible={ctrInputModal.modalVisible}
      handleInputModalClose={ctrInputModal.handleModalClose}
      inputModalRef={ctrInputModal.modalRef}
    />
  </td>
);
MonthDatePresenter.propTypes = {
  dayInfo: PropTypes.object,
  ctrInputModal: PropTypes.object,
};
export default MonthDatePresenter;

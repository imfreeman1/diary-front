import React from "react";
import MonthEditModalContainer from "../MonthModal/MonthEditModal/MonthEditModalContainer";
import { v4 } from "uuid";
import PropTypes from "prop-types";

/**
 * @param {todo} obj {text, date, id}
 * @param {dayInfo} obj {날짜정보, ...}
 * @param {ctrEditModal} { modalVisible: boolean, modalRef:modalRef, handleModalOpen: {f}, handleModalClose: {f} }
 * @returns
 */

const MonthTodoItemPresenter = ({ todo, dayInfo, ctrEditModal }) => {
  return (
    <>
      <li
        key={v4()}
        onClick={() => ctrEditModal.handleModalOpen()}
        className="block truncate bg-gray-200 p-1 pl-2 my-2 mx-0.5 border-gray-400 border-2 rounded-xl hover:bg-gray-300 hover:border-gray-600 hover:cursor-pointer"
      >
        {todo.todoContent}
      </li>
      <MonthEditModalContainer
        todo={todo}
        dayInfo={dayInfo}
        editModalVisible={ctrEditModal.modalVisible}
        handleEditModalClose={ctrEditModal.handleModalClose}
        editModalRef={ctrEditModal.modalRef}
      />
    </>
  );
};

MonthTodoItemPresenter.propTypes = {
  todo: PropTypes.object,
  dayInfo: PropTypes.object,
  ctrEditModal: PropTypes.object,
};

export default MonthTodoItemPresenter;

import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import MonthEditModalContainer from "../MonthModal/MonthEditModal/MonthEditModalContainer";

/**
 * @param {todo} obj {text, date, id}
 * @param {dayInfo} obj {날짜정보, ...}
 * @param {ctrEditModal}
 * { modalVisible: boolean, modalRef:modalRef, handleModalOpen: {f}, handleModalClose: {f} }
 * @returns
 */

const MonthTodoItemPresenter = ({ todo, dayInfo, ctrEditModal }) => (
  <>
    <li
      key={v4()}
      onClick={() => ctrEditModal.handleModalOpen()}
      className="block truncate bg-gradient-to-r from-green-600 from-10% via-green-500 via-30% to-green-100 to-60% opacity-100 p-1 pl-2 my-2.5 mx-0.5 rounded hover:from-green-500 hover:cursor-pointer"
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

MonthTodoItemPresenter.propTypes = {
  todo: PropTypes.object,
  dayInfo: PropTypes.object,
  ctrEditModal: PropTypes.object,
};

export default MonthTodoItemPresenter;

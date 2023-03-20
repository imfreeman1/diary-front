import React from "react";
import MonthEditModal from "../MonthModal/MonthEditModal";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import useControlModal from "@/pages/hooks/useControlModal";

/**
 * @param {todo} obj {text, date, id}
 * @param {dayInfo} obj {locdate, ...}
 * @param {ctrEditModal} { modalVisible: boolean, modalRef:modalRef, handleModalOpen: {f}, handleModalClose: {f} }
 * @returns
 */

const MonthTodoItem = ({ todo, dayInfo }) => {
  const ctrEditModal = useControlModal(dayInfo);
  return (
    <>
      <li
        key={v4()}
        onClick={() => ctrEditModal.handleModalOpen()}
        className="block truncate bg-gray-200 p-1 pl-2 my-2 mx-0.5 border-gray-400 border-2 rounded-xl hover:bg-gray-300 hover:border-gray-600 hover:cursor-pointer"
      >
        {todo.todoContent}
      </li>
      <MonthEditModal
        todo={todo}
        dayInfo={dayInfo}
        editModalVisible={ctrEditModal.modalVisible}
        handleEditModalClose={ctrEditModal.handleModalClose}
        editModalRef={ctrModalRef.editModalRef}
      />
    </>
  );
};

MonthTodoItem.propTypes = {
  todo: PropTypes.array,
  dayInfo: PropTypes.object,
};
export default MonthTodoItem;

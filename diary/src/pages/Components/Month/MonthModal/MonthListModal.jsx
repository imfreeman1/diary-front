import React from "react";
import MonthTodoItem from "../MonthTodo/MonthTodoItem";
import { BiX } from "react-icons/bi";
import { v4 } from "uuid";
import PropTypes from "prop-types";

/**
 * @param {dayInfo} obj
 * @param {ctrInputModal} { modalVisible: boolean, modalRef:modalRef, handleModalOpen: {f}, handleModalClose: {f}
 * @returns
 */

const MonthListModal = ({
  dayInfo,
  listModalVisible,
  handleListModalClose,
  listModalRef,
}) => {
  const { locdate, todos, day } = dayInfo;

  const onChildDbclick = (e) => {
    e.stopPropagation();
  };

  return listModalVisible ? (
    <div
      onDoubleClick={onChildDbclick}
      ref={listModalRef}
      className="z-1 w-96 h-96 p-1 bg-white text-right rounded drop-shadow-2xl select-none"
    >
      <div className="flex m-3 justify-end">
        <BiX
          onClick={() => handleListModalClose()}
          size="25"
          className="rounded cursor-pointer hover:bg-gray-200"
        />
      </div>
      <div className="text-left px-3">
        <p className="text-lg text-center text-blue-900 border-2">
          {locdate} {day}
        </p>
        {todos.map((todo) => (
          <MonthTodoItem key={v4()} todo={todo} dayInfo={dayInfo} />
        ))}
      </div>
    </div>
  ) : null;
};

MonthListModal.propTypes = {
  dayInfo: PropTypes.object,
  listModalVisible: PropTypes.boolean,
  handleListModalClose: PropTypes.func,
  listModalRef: PropTypes.ref,
};
export default MonthListModal;

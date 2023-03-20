import useOnClickOutside from "@/pages/hooks/useOnClickOutSide";
import React, { useRef, useState } from "react";
import MonthEditModal from "../MonthModal/MonthEditModal";
import { v4 } from "uuid";

/**
 * @param {todo} obj {text, date, id}
 * @param {dayInfo} obj {locdate, ...}
 * @returns
 */

// 로직이랑 비지블 나눠

const MonthTodoItem = ({ todo, dayInfo }) => {
  const [itemModalVisible, setItemModalVisible] = useState(false);
  const editModalRef = useRef();

  const handleItemModalOpen = () => {
    setTimeout(() => {
      setItemModalVisible(true);
    }, 300);
  };

  const handleItemModalClose = () => {
    setItemModalVisible(false);
  };

  useOnClickOutside(editModalRef, () => setItemModalVisible(false));

  const onChildDbclick = (e) => {
    e.stopPropagation();
  };
  return (
    <>
      <li
        key={v4()}
        onClick={() => handleItemModalOpen()}
        className="block truncate bg-gray-200 p-1 pl-2 my-2 mx-0.5 border-gray-400 border-2 rounded-xl hover:bg-gray-300 hover:border-gray-600 hover:cursor-pointer"
      >
        {todo.todoContent}
      </li>
      <div onDoubleClick={onChildDbclick} ref={editModalRef}>
        <MonthEditModal
          todo={todo}
          dayInfo={dayInfo}
          itemModalVisible={itemModalVisible}
          handleItemModalClose={handleItemModalClose}
        ></MonthEditModal>
      </div>
    </>
  );
};

export default MonthTodoItem;

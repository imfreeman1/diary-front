import useOnClickOutside from "@/pages/hooks/useOnClickOutSide";
import React, { useRef, useState } from "react";
import Button from "../../Button";
import MonthListModal from "../MonthModal/MonthListModal";
import MonthTodoItem from "./MonthTodoItem";
import { v4 } from "uuid";
import {
  BASIC_SHOW_TODO,
  MAX_SHOW_TODO,
  SHOW_MORE_TODO,
} from "@/Constants/monthConstants";
import PropTypes from "prop-types";
import useControlModal from "@/pages/hooks/useControlModal";

/**
 * @param {dayInfo} obj
 * @returns
 */

const MonthTodo = ({ dayInfo }) => {
  const ctrListModal = useControlModal(dayInfo);

  const { todos } = dayInfo;
  const viewTodoLen =
    todos?.length > MAX_SHOW_TODO ? BASIC_SHOW_TODO : MAX_SHOW_TODO;
  return (
    <>
      {todos.map((todo, idx) => {
        if (idx < viewTodoLen) {
          return <MonthTodoItem key={v4()} todo={todo} dayInfo={dayInfo} />;
        }
        if (idx === viewTodoLen) {
          return (
            <>
              <Button
                onClick={() => ctrListModal.handleModalOpen()}
                content={SHOW_MORE_TODO(todos)}
                className="block font-semibold p-1 pl-2 my-2 mx-auto rounded hover:bg-gray-300 hover:cursor-pointer"
              />
              <MonthListModal
                dayInfo={dayInfo}
                listModalVisible={ctrListModal.modalVisible}
                handleListModalClose={ctrListModal.handleModalClose}
                listModalRef={ctrListModal.modalRef}
              />
            </>
          );
        }
      })}
    </>
  );
};

MonthTodo.propTypes = {
  dayInfo: PropTypes.object,
};
export default MonthTodo;

import useOnClickOutside from "@/pages/hooks/useOnClickOutSide";
import React, { useRef, useState } from "react";
import Button from "../Button";
import MonthListModal from "../MonthModal/MonthListModal";
import MonthTodoItem from "./MonthTodoItem";
import { v4 } from "uuid";
import {
  BASIC_SHOW_TODO,
  MAX_SHOW_TODO,
  SHOW_MORE_TODO,
} from "@/Constants/monthConstants";

/**
 * @param {dayInfo} obj
 * @returns
 */

const MonthTodo = ({ dayInfo }) => {
  const [listModalVisible, setListModalVisible] = useState(false);
  const listModalRef = useRef();

  const handleListModalOpen = () => {
    setTimeout(() => {
      setListModalVisible(true);
    }, 300);
  };
  const handleListModalClose = () => {
    setListModalVisible(false);
  };

  useOnClickOutside(listModalRef, () => setListModalVisible(false));

  const { todos } = dayInfo;
  const viewTodoLen =
    todos?.length > MAX_SHOW_TODO ? BASIC_SHOW_TODO : MAX_SHOW_TODO;

  const onChildDbclick = (e) => {
    e.stopPropagation();
  };

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
                onClick={() => handleListModalOpen()}
                content={SHOW_MORE_TODO(todos)}
                className="block font-semibold p-1 pl-2 my-2 mx-auto rounded hover:bg-gray-300 hover:cursor-pointer"
              />
              <div onDoubleClick={onChildDbclick} ref={listModalRef}>
                <MonthListModal
                  dayInfo={dayInfo}
                  listModalVisible={listModalVisible}
                  handleListModalClose={handleListModalClose}
                />
              </div>
            </>
          );
        }
      })}
    </>
  );
};

export default MonthTodo;

import { delTodo, editTodo } from "@/Redux/action";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { BiEdit, BiTrash, BiTransfer, BiX } from "react-icons/bi";
import { INPUT_PLACEHOLDER } from "@/Constants/monthConstants";
import PropTypes from "prop-types";

/**
 * @param {todo} obj {text, id date}
 * @param {dayInfo} obj
 * @param {itemVisible} boolean
 * @param {handleItemModalClose} func
 * @returns
 */

const MonthEditModal = ({
  todo,
  dayInfo,
  editModalVisible,
  handleEditModalClose,
  editModalRef,
}) => {
  const dispatch = useDispatch();

  const [isEdited, setIsEdited] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const focusRef = useRef();

  const handleEditKeyPress = (e) => {
    e.preventDefault();
    dispatch(editTodo({ text: editText, todo: todo }));
    setIsEdited(false);
  };
  const handleEditText = (e) => {
    setEditText(e.target.value);
  };
  const onDelete = (todo) => {
    dispatch(delTodo(todo));
  };

  useEffect(() => {
    if (editModalVisible && isEdited) focusRef.current.focus();
  }, [editModalVisible, isEdited]);

  const onChildDbclick = (e) => {
    e.stopPropagation();
  };

  return editModalVisible && dayInfo.locdate ? (
    <div
      onDoubleClick={onChildDbclick}
      ref={editModalRef}
      className="z-0 absolute inset-x-auto w-96 h-fit bg-white text-right select-none rounded drop-shadow-2xl"
    >
      <div className="m-3 flex flex-row-reverse">
        <BiX
          onClick={() => handleEditModalClose()}
          size="25"
          className="rounded cursor-pointer hover:bg-gray-200"
        />
        <BiTransfer
          size="25"
          className="rounded cursor-pointer hover:bg-gray-200"
        />
        <BiTrash
          onClick={() => onDelete(todo)}
          size="25"
          className="rounded cursor-pointer hover:bg-gray-200"
        />
        <BiEdit
          onClick={() => setIsEdited(true)}
          size="25"
          className="rounded cursor-pointer hover:bg-gray-200"
        />
      </div>
      <div className="text-left m-10">
        {isEdited ? (
          <form onSubmit={handleEditKeyPress}>
            <span>■ </span>
            <input
              placeholder={INPUT_PLACEHOLDER}
              value={editText}
              ref={focusRef}
              onChange={handleEditText}
              className="text-xl border-b-2"
            />
          </form>
        ) : (
          <>
            <span>■ </span>
            <span>{todo.todoContent}</span>
          </>
        )}
      </div>
    </div>
  ) : null;
};

MonthEditModal.propTypes = {
  todo: PropTypes.array,
  dayInfo: PropTypes.object,
  itemModalVisible: PropTypes.boolean,
  handleItemModalClose: PropTypes.func,
};
export default MonthEditModal;

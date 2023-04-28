import React from 'react';
import {
  BiEdit, BiTrash, BiTransfer, BiX,
} from 'react-icons/bi';
import PropTypes from 'prop-types';
import { INPUT_PLACEHOLDER } from 'src/Constants/monthlyConstants';

function MonthEditModalPresenter({
  todo,
  dayInfo,
  editModalVisible,
  handleEditModalClose,
  editModalRef,
  handleEditKeyPress,
  onDelete,
  onChildDbclick,
  setIsEdited,
  isEdited,
  editText,
  focusRef,
  handleEditText,
}) {
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
}

MonthEditModalPresenter.propTypes = {
  todo: PropTypes.object,
  dayInfo: PropTypes.object,
  editModalVisible: PropTypes.bool,
  handleEditModalClose: PropTypes.func,
  editModalRef: PropTypes.object,
  handleEditKeyPress: PropTypes.func,
  onDelete: PropTypes.func,
  onChildDbclick: PropTypes.func,
  setIsEdited: PropTypes.func,
  isEdited: PropTypes.bool,
  editText: PropTypes.string,
  focusRef: PropTypes.object,
  handleEditText: PropTypes.func,
};
export default MonthEditModalPresenter;

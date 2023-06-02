/* eslint-disable react/forbid-prop-types */
import React from 'react';
import {
  BiEdit, BiTrash, BiTransfer, BiX,
} from 'react-icons/bi';
import PropTypes from 'prop-types';
import { MONTH_CONST } from '../../../Constants/monthlyConstants';

// input Modal의 수정창 === editmodal
function MonthEditModalPresenter({
  todo,
  locdate,
  editModalVisible,
  handleEditModalClose,
  editModalRef,
  handleEditKeyPress,
  onDelete,
  setIsEdited,
  setEditText,
  isEdited,
  editText,
  focusRef,
}) {
  return (editModalVisible && locdate) && (
    <div
      onDoubleClick={(e) => e.stopPropagation()}
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
              placeholder={MONTH_CONST.INPUT_PLACEHOLDER}
              value={editText}
              ref={focusRef}
              onChange={({ target }) => setEditText(target.value)}
              className="text-xl border-b-2"
              required
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
  );
}

MonthEditModalPresenter.propTypes = {
  locdate: PropTypes.string.isRequired,
  todo: PropTypes.shape({
    date: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    todoContent: PropTypes.string.isRequired,
  }).isRequired,
  editModalVisible: PropTypes.bool.isRequired,
  handleEditModalClose: PropTypes.func.isRequired,
  editModalRef: PropTypes.shape({ current: PropTypes.object }).isRequired,
  handleEditKeyPress: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  setIsEdited: PropTypes.func.isRequired,
  isEdited: PropTypes.bool.isRequired,
  editText: PropTypes.string.isRequired,
  focusRef: PropTypes.shape({ current: PropTypes.object }).isRequired,
  setEditText: PropTypes.func.isRequired,

};
export default MonthEditModalPresenter;

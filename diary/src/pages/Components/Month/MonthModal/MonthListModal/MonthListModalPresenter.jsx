import React from 'react';
import { v4 } from 'uuid';
import { BiX } from 'react-icons/bi';
import PropTypes from 'prop-types';
import MonthTodoItemContainer from '../../MonthTodoItem/MonthTodoItemContainer';

const MonthListModalPresenter = ({
  dayInfo,
  listModalVisible,
  handleListModalClose,
  listModalRef,
  onChildDbclick,
}) => {
  const { locdate, todos, day } = dayInfo;

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
          {locdate}
          {' '}
          {day}
        </p>
        {todos.map((todo) => (
          <MonthTodoItemContainer key={v4()} todo={todo} dayInfo={dayInfo} />
        ))}
      </div>
    </div>
  ) : null;
};

MonthListModalPresenter.propTypes = {
  dayInfo: PropTypes.object,
  listModalVisible: PropTypes.bool,
  handleListModalClose: PropTypes.func,
  listModalRef: PropTypes.object,
  onChildDbclick: PropTypes.func,
};
export default MonthListModalPresenter;

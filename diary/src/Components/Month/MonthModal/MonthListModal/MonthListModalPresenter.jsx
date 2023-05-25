/* eslint-disable react/forbid-prop-types */
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
  handleDelete,
}) => {
  const { locdate, todos, day } = dayInfo;

  return listModalVisible ? (
    <div className="fixed top-0 left-0 h-screen w-screen bg-opacity-20 bg-[#000000]">
      <div
        onDoubleClick={(e) => e.stopPropagation()}
        ref={listModalRef}
        className="z-1 fixed top-0 left-0 right-0 bottom-0 m-auto flex flex-col justify-between w-1/2 lg:w-1/3 xl:w-1/4 h-[400px] p-1 bg-neutral-100 text-right rounded drop-shadow-2xl select-none"
      >
        {/* <div className="bg-orange-600 h-1" /> */}

        <div className="flex mx-3 my-2 justify-between">
          <div className="text-xl font-bold py-2 px-2 text-center text-black bg-white border-4 border-neutral-400">
            <p>
              {locdate}
              {' '}
              {day}

            </p>
          </div>
          <BiX
            onClick={() => handleListModalClose()}
            size="25"
            className="rounded cursor-pointer hover:bg-gray-200"
          />
        </div>
        <div className="text-left m-5 p-2 bg-white shadow-inner overflow-auto">
          {todos.map((todo) => (
            <MonthTodoItemContainer
              key={v4()}
              todo={todo}
              dayInfo={dayInfo}
            />
          ))}
        </div>
        <div className="flex mx-3 my-2 justify-end">
          <button
            type="button"
            onClick={handleDelete}
            className="inline-block text-sm w-fit px-3 py-0 border-4 border-white bg-orange-300 hover:bg-orange-400"
          >
            항목 모두 삭제
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

MonthListModalPresenter.propTypes = {
  dayInfo: PropTypes.shape({
    date: PropTypes.number.isRequired,
    dateName: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
    isHoliday: PropTypes.bool.isRequired,
    isInMonth: PropTypes.bool.isRequired,
    locdate: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
      date: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      todoContent: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
  listModalVisible: PropTypes.bool.isRequired,
  handleListModalClose: PropTypes.func.isRequired,
  listModalRef: PropTypes.shape({ current: PropTypes.object }).isRequired,
  handleDelete: PropTypes.func.isRequired,
};
export default MonthListModalPresenter;

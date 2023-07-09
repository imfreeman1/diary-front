/* eslint-disable react/forbid-prop-types */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import Button from 'src/Components/Button/Button';
import MonthTodoItemContainer from '../MonthTodoItem/MonthTodoItemContainer';
import MonthListModalContainer from '../MonthListModal/MonthListModalContainer';
import { MONTH_CONST } from '../../Constants/monthlyConstants';
/**
 * @param {dayInfo} obj
 * @param {ctrListModal}
 * { modalVisible: boolean, modalRef:modalRef, handleModalOpen: {f}, handleModalClose: {f}
 * @returns
 */

const MonthTodoPresenter = ({
  locdate, day, todos, ctrListModal, viewTodoLen, isInMonth,
}) => (
  <>
    {todos.map((todo, idx) => {
      if (idx < viewTodoLen) {
        return (
          <MonthTodoItemContainer
            key={v4()}
            todo={todo}
            todos={todos}
            locdate={locdate}
            isInMonth={isInMonth}
          />
        );
      }
      if (idx === viewTodoLen) {
        return (
          <div key={v4()} className="p-1 pl-2 px-5 my-2.5 mx-0.5 bg-pink-100 text-pink-900 text-center rounded shadow-inner hover:bg-pink-200">
            <Button
              key={v4()}
              onClick={() => ctrListModal.handleModalOpen()}
              content={MONTH_CONST.SHOW_MORE_TODO(todos)}
              className=" "
            />
            <MonthListModalContainer
              locdate={locdate}
              todos={todos}
              day={day}
              isInMonth={isInMonth}
              listModalVisible={ctrListModal.modalVisible}
              handleListModalClose={ctrListModal.handleModalClose}
              listModalRef={ctrListModal.modalRef}
            />
          </div>
        );
      }
    })}
  </>
);

MonthTodoPresenter.propTypes = {
  ctrListModal: PropTypes.shape({
    modalVisible: PropTypes.bool,
    modalRef: PropTypes.shape({ current: PropTypes.object }).isRequired,
    handleModalOpen: PropTypes.func.isRequired,
    handleModalClose: PropTypes.func.isRequired,
  }).isRequired,
  viewTodoLen: PropTypes.number.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    todoContent: PropTypes.string.isRequired,
  })).isRequired,
  isInMonth: PropTypes.bool.isRequired,
  locdate: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  day: PropTypes.string.isRequired,
};

export default React.memo(MonthTodoPresenter);

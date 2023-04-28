/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import { SHOW_MORE_TODO } from 'src/Constants/monthlyConstants';
import Button from '../../Button';
import MonthTodoItemContainer from '../MonthTodoItem/MonthTodoItemContainer';
import MonthListModalContainer from '../MonthModal/MonthListModal/MonthListModalContainer';

const MonthTodoPresenter = ({ dayInfo, ctrListModal, viewTodoLen }) => {
  const { todos } = dayInfo;
  return (
    <>
      {todos.map((todo, idx) => {
        if (idx < viewTodoLen) {
          return (
            <MonthTodoItemContainer
              key={v4()}
              todo={todo}
              dayInfo={dayInfo}
            />
          );
        }
        if (idx === viewTodoLen) {
          return (
            <>
              <Button
                key={v4()}
                onClick={() => ctrListModal.handleModalOpen()}
                content={SHOW_MORE_TODO(dayInfo.todos)}
                className="block p-1 pl-2 my-2 mx-auto hover:font-semibold hover:cursor-pointer text-green-900"
              />
              <MonthListModalContainer
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

MonthTodoPresenter.propTypes = {
  dayInfo: PropTypes.object,
  ctrListModal: PropTypes.object,
  viewTodoLen: PropTypes.number,
};

export default MonthTodoPresenter;

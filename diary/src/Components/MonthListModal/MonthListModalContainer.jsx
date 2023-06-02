/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import useAxios from 'src/hooks/useAxios';
import { allDelTodo } from 'src/Redux/action';
import { useDispatch } from 'react-redux';
import { POST_MONTH_DELETE_OPT } from 'src/Constants/monthlyConstants';
import MonthListModalPresenter from './MonthListModalPresenter';

const MonthListModalContainer = ({
  todos,
  day,
  locdate,
  isInMonth,
  listModalVisible,
  handleListModalClose,
  listModalRef,
}) => {
  const dispatch = useDispatch();
  const { operation } = useAxios();
  const handleDelete = () => {
    dispatch(allDelTodo({ date: locdate }));
    operation(POST_MONTH_DELETE_OPT(locdate));
  };
  return (
    <MonthListModalPresenter
      todos={todos}
      day={day}
      isInMonth={isInMonth}
      locdate={locdate}
      listModalVisible={listModalVisible}
      handleListModalClose={handleListModalClose}
      listModalRef={listModalRef}
      handleDelete={handleDelete}
    />
  );
};

MonthListModalContainer.propTypes = {
  isInMonth: PropTypes.bool.isRequired,
  listModalVisible: PropTypes.bool.isRequired,
  handleListModalClose: PropTypes.func.isRequired,
  listModalRef: PropTypes.shape({ current: PropTypes.object }).isRequired,
  locdate: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  day: PropTypes.string.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    todoContent: PropTypes.string.isRequired,
  })).isRequired,
};
export default MonthListModalContainer;

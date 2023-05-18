/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import useAxios from 'src/hooks/useAxios';
import { allDelTodo } from 'src/Redux/action';
import { useDispatch } from 'react-redux';
import MonthListModalPresenter from './MonthListModalPresenter';

const MonthListModalContainer = ({
  dayInfo,
  listModalVisible,
  handleListModalClose,
  listModalRef,
}) => {
  const dispatch = useDispatch();
  const {
    response, error, loading, operation,
  } = useAxios();
  const postDeleteMonthlyAxios = () => {
    operation({
      method: 'post',
      url: '/monthly/delete',
      payload: { date: dayInfo.locdate },
    });
  };
  const handleDelete = () => {
    dispatch(allDelTodo({ date: dayInfo.locdate }));
    postDeleteMonthlyAxios();
  };
  return (
    <MonthListModalPresenter
      dayInfo={dayInfo}
      listModalVisible={listModalVisible}
      handleListModalClose={handleListModalClose}
      listModalRef={listModalRef}
      handleDelete={handleDelete}
    />
  );
};

MonthListModalContainer.propTypes = {
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
};
export default MonthListModalContainer;

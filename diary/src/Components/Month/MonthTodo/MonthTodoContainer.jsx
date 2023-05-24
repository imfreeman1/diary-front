import React from 'react';
import PropTypes from 'prop-types';
import { MONTH_CONST } from '../../../Constants/monthlyConstants';
import useControlModal from '../../../hooks/useControlModal';
import MonthTodoPresenter from './MonthTodoPresenter';

/**
 * @param {dayInfo} obj
 * @returns
 */

function MonthTodoContainer({ dayInfo }) {
  const ctrListModal = useControlModal(dayInfo.isInMonth);
  const { todos } = dayInfo;
  const viewTodoLen = todos?.length > MONTH_CONST.MAX_SHOW_TODO ? MONTH_CONST.BASIC_SHOW_TODO : MONTH_CONST.MAX_SHOW_TODO;
  return (
    <MonthTodoPresenter
      dayInfo={dayInfo}
      ctrListModal={ctrListModal}
      viewTodoLen={viewTodoLen}
    />
  );
}

MonthTodoContainer.propTypes = {
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
};
export default MonthTodoContainer;

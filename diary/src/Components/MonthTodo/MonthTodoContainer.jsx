import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import { MONTH_CONST } from '../../Constants/monthlyConstants';
import useControlModal from '../../hooks/useControlModal';
import MonthTodoPresenter from './MonthTodoPresenter';

/**
 * @param {dayInfo} obj
 * @returns
 */

function MonthTodoContainer({
  todos, day, isInMonth, locdate,
}) {
  const ctrListModal = useControlModal(true);
  const isTodoLenOver = todos?.length > MONTH_CONST.MAX_SHOW_TODO;
  const viewTodoLen = useMemo(()=>isTodoLenOver ? MONTH_CONST.BASIC_SHOW_TODO : MONTH_CONST.MAX_SHOW_TODO,[isTodoLenOver]);
  return (
    <MonthTodoPresenter
      locdate={locdate}
      isInMonth={isInMonth}
      todos={todos}
      day={day}
      ctrListModal={ctrListModal}
      viewTodoLen={viewTodoLen}
    />
  );
}

MonthTodoContainer.propTypes = {
  isInMonth: PropTypes.bool.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    todoContent: PropTypes.string.isRequired,
  })).isRequired,
  day: PropTypes.string.isRequired,
  locdate: PropTypes.string.isRequired,
};
export default MonthTodoContainer;

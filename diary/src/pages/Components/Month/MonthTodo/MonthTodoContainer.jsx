import React from 'react';
import PropTypes from 'prop-types';
import { BASIC_SHOW_TODO, MAX_SHOW_TODO } from '@/Constants/monthlyConstants';
import useControlModal from '@/pages/hooks/useControlModal';
import MonthTodoPresenter from './MonthTodoPresenter';

/**
 * @param {dayInfo} obj
 * @returns
 */

function MonthTodoContainer({ dayInfo }) {
  const ctrListModal = useControlModal(dayInfo);
  const { todos } = dayInfo;
  const viewTodoLen = todos?.length > MAX_SHOW_TODO ? BASIC_SHOW_TODO : MAX_SHOW_TODO;
  return (
    <MonthTodoPresenter
      dayInfo={dayInfo}
      ctrListModal={ctrListModal}
      viewTodoLen={viewTodoLen}
    />
  );
}

MonthTodoContainer.propTypes = {
  dayInfo: PropTypes.object,
};
export default MonthTodoContainer;

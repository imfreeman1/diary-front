import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import useControlModal from 'src/hooks/useControlModal';
import MonthDatePresenter from './MonthDatePresenter';

/**
 * @param {ctrInputModal}
 * { modalVisible: boolean, modalRef:modalRef,handleModalOpen: {f}, handleModalClose: {f} }
 * @returns
 */

function MonthDateContainer({ dayIdx, week }) {
  const monthCalendar = useSelector(
    ({ monthCalendarReducer }) => monthCalendarReducer.monthCalendar,
  );
  const dayInfo = monthCalendar[week][dayIdx];
  const ctrInputModal = useControlModal(dayInfo.isInMonth);

  return (
    <MonthDatePresenter
      dayInfo={dayInfo}
      ctrInputModal={ctrInputModal}
      isInMonth={dayInfo.isInMonth}
    />
  );
}

MonthDateContainer.propTypes = {
  dayIdx: PropTypes.number.isRequired,
  week: PropTypes.number.isRequired,
};
export default MonthDateContainer;

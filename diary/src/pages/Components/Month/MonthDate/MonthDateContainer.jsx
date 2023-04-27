import React from 'react';
import PropTypes from 'prop-types';
import useControlModal from './src/pages/hooks/useControlModal';
import MonthDatePresenter from './MonthDatePresenter';

/**
 * @param {ctrInputModal}
 * { modalVisible: boolean, modalRef:modalRef,handleModalOpen: {f}, handleModalClose: {f} }
 * @returns
 */

function MonthDateContainer({ dayInfo }) {
  const ctrInputModal = useControlModal(dayInfo);

  return (
    <MonthDatePresenter
      dayInfo={dayInfo}
      ctrInputModal={ctrInputModal}
    />
  );
}

MonthDateContainer.propTypes = {
  dayInfo: PropTypes.object,
};
export default MonthDateContainer;

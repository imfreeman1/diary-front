import React from 'react';
import PropTypes from 'prop-types';
import MonthListModalPresenter from './MonthListModalPresenter';

/**
 * @param {dayInfo} obj
 * @param {ctrInputModal}
 * { modalVisible: boolean, modalRef:modalRef, handleModalOpen: {f}, handleModalClose: {f}
 * @returns
 */

const MonthListModalContainer = ({
  dayInfo,
  listModalVisible,
  handleListModalClose,
  listModalRef,
}) => {
  const onChildDbclick = (e) => {
    e.stopPropagation();
  };

  return (
    <MonthListModalPresenter
      dayInfo={dayInfo}
      listModalVisible={listModalVisible}
      handleListModalClose={handleListModalClose}
      listModalRef={listModalRef}
      onChildDbclick={onChildDbclick}
    />
  );
};

MonthListModalContainer.propTypes = {
  dayInfo: PropTypes.object,
  listModalVisible: PropTypes.bool,
  handleListModalClose: PropTypes.func,
  listModalRef: PropTypes.object,
};
export default MonthListModalContainer;

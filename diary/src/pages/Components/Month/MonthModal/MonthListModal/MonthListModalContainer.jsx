import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MonthListModalPresenter from './MonthListModalPresenter';

const MonthListModalContainer = ({
  dayInfo,
  listModalVisible,
  handleListModalClose,
  listModalRef,
}) => (
  <MonthListModalPresenter
    dayInfo={dayInfo}
    listModalVisible={listModalVisible}
    handleListModalClose={handleListModalClose}
    listModalRef={listModalRef}
  />
);

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
  listModalRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Component) }),
  ]).isRequired,
};
export default MonthListModalContainer;

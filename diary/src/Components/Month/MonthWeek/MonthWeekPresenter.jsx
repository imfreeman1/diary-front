import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import MonthDateContainer from '../MonthDate/MonthDateContainer';

/**
 * @param {week} list
 * @returns
 */

const MonthWeekPresenter = ({ week }) => {
  const weekArray = [0, 1, 2, 3, 4, 5, 6];
  return (
    <tbody>
      <tr className="flex flex-grow m-2 gap-3">
        {weekArray.map((dayIdx) => (
          <MonthDateContainer
            dayIdx={dayIdx}
            week={week}
            key={v4()}
          />
        ))}
      </tr>
    </tbody>
  );
};

MonthWeekPresenter.propTypes = {
  // week: PropTypes.arrayOf(PropTypes.shape({
  //   date: PropTypes.number.isRequired,
  //   dateName: PropTypes.string.isRequired,
  //   day: PropTypes.string.isRequired,
  //   isHoliday: PropTypes.bool.isRequired,
  //   isInMonth: PropTypes.bool.isRequired,
  //   locdate: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  //   todos: PropTypes.arrayOf(PropTypes.shape({
  //     date: PropTypes.string.isRequired,
  //     id: PropTypes.string.isRequired,
  //     todoContent: PropTypes.string.isRequired,
  //   })).isRequired,
  // }).isRequired).isRequired,
  week: PropTypes.number.isRequired,

};

export default MonthWeekPresenter;

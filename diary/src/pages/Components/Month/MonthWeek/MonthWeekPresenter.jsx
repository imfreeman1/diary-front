import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import MonthDateContainer from '../MonthDate/MonthDateContainer';

/**
 * @param {week} list
 * @returns
 */

const MonthWeekPresenter = ({ week }) => (
  <tbody>
    <tr className="flex">
      {week.map((dayInfo) => <MonthDateContainer dayInfo={dayInfo} key={v4()} />)}
    </tr>
  </tbody>
);

MonthWeekPresenter.propTypes = {
  week: PropTypes.array,
};

export default MonthWeekPresenter;

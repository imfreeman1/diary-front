import React from "react";
import MonthDateContainer from "../MonthDate/MonthDateContainer";
import { v4 } from "uuid";
import PropTypes from "prop-types";

/**
 * @param {week} list
 * @returns
 */

const MonthWeekPresenter = ({ week }) => {
  return (
    <tbody>
      <tr className="flex">
        {week.map((dayInfo) => {
          return <MonthDateContainer dayInfo={dayInfo} key={v4()} />;
        })}
      </tr>
    </tbody>
  );
};

MonthWeekPresenter.propTypes = {
  week: PropTypes.array,
};

export default MonthWeekPresenter;

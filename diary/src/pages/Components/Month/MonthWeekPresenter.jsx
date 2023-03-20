import React from "react";
import MonthDateContainer from "./MonthDateContainer";
import { v4 } from "uuid";
import PropTypes from "prop-types";

/**
 * @param {week} list
 * @returns
 */

const MonthWeek = ({ week }) => {
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

MonthWeek.propTypes = {
  week: PropTypes.array,
};

export default MonthWeek;

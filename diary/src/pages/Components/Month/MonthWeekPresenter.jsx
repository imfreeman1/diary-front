import React from "react";
import MonthDate from "./MonthDate";
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
          return <MonthDate dayInfo={dayInfo} key={v4()} />;
        })}
      </tr>
    </tbody>
  );
};

MonthWeek.propTypes = {
  week: PropTypes.array,
};

export default MonthWeek;

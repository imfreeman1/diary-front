import React from 'react';
import { getDate } from 'date-fns';

const DatepickerRenderDayContents = (day, date) => {
  const tooltipText = `Tooltip for date: ${date}`;
  return <span title={tooltipText} className="text-sm bg-red-100 p-3 w-5 h-5 rounded-full">{getDate(date)}</span>;
};

export default DatepickerRenderDayContents;

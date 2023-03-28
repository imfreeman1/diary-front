import React from 'react';

const WeeklyDisplayPresenter = ({ weekly, weekTextContent, handleChange }) => (
  <div className="relative w-[250px] h-[450px] bg-white rounded-xl border-2 border-black border-dashed">
    <div className="absolute m-3 w-5 h-5 border-2 border-black rounded-full" />
    <div className="text-xl font-bold mt-10">{weekly.day}</div>
    <textarea
      spellCheck="false"
      value={weekTextContent}
      onChange={handleChange}
      className="block min-h-[200px] max-h-[200px] mt-5 mx-auto p-4 border-4 overflow-hidden rounded-lg"
    />
    <div className="absolute bottom-0 right-0 m-3 text-sm text-gray-400">
      {weekly.locdate}
    </div>
  </div>
);

export default WeeklyDisplayPresenter;

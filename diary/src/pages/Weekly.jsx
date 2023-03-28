import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatepickerComponent from './Components/DatepickerComponent/DatepickerComponent';
import Button from './Components/Button';
import WeeklyDisplay from './Components/Weekly/WeeklyDisplay';
import useGetWeekly, { getlocWeek } from './Utils/useGetWeekly';
import { setlocWeek, setWeekly } from '@/Redux/action';
import { WEEKLY_LOGO } from '@/Constants/weeklyConstant';

const WeeklyPage = () => {
  const dateInWeekly = new Date();
  const [selectedDate, setSelectedDate] = useState(dateInWeekly);
  const currentWeekly = useGetWeekly(selectedDate);
  const locThisWeek = getlocWeek(selectedDate);

  const dispatch = useDispatch();
  const weeklyContent = useSelector((state) => state.weeklyReducer.weeklyContent[`W-${locThisWeek}`]);

  dispatch(setlocWeek(locThisWeek));

  useEffect(() => {
    dispatch(setWeekly({ currentWeekly, locWeek: locThisWeek }));
  }, [dispatch, selectedDate]);

  const moveToWeek = (weekNum) => {
    const dateCalculation = new Date(selectedDate.setDate(selectedDate.getDate() + weekNum));
    setSelectedDate(dateCalculation);
  };
  return (
    <div className="h-screen bg-[#9DBC9D] text-center">
      {WEEKLY_LOGO}
      <DatepickerComponent selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <div className="w-fit h-fit rounded border-2 bg-white shadow-sm mt-10 mx-auto">
        <div className="text-2xl font-bold text-green-900 text-left ml-5">
          <span className="text-black">{WEEKLY_LOGO}</span>
          {' '}
          {locThisWeek}
        </div>
        <div className="flex justify-end gap-5 h-10 text-right mr-5">
          <Button content="<" onClick={() => moveToWeek(-7)} />
          <Button content=">" onClick={() => moveToWeek(7)} />
        </div>
        <div className="m-3 mx-5 grid grid-cols-4 shadow">
          {weeklyContent
            ? weeklyContent.map((day, i) => (
              <WeeklyDisplay
                key={i}
                idx={i}
                day={day}
                locThisWeek={locThisWeek}
              />
            ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default WeeklyPage;

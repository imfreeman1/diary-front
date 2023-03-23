import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
import DatepickerComponent from './Components/DatepickerComponent/DatepickerComponent';
import Button from './Components/Button';
import WeeklyDisplay from './Components/Weekly/WeeklyDisplay';
import useGetWeekly from './Utils/useGetWeekly';
import { setWeek } from '@/Redux/action';

const WeeklyPage = () => {
  const dateInWeekly = new Date();
  const [selectedDate, setSelectedDate] = useState(dateInWeekly);

  const dispatch = useDispatch();
  const { weeklyContent } = useSelector((state) => state.weeklyReducer);
  useEffect(() => {
    dispatch(setWeek(useGetWeekly(selectedDate)));
  }, [selectedDate]);

  const moveToWeek = (tempNum) => {
    setSelectedDate(new Date(selectedDate.setDate(selectedDate.getDate() + tempNum)));
  };
  return (
    <div className="h-screen bg-[#9DBC9D] text-center">
      Weekly
      <DatepickerComponent selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <div className="w-fit h-fit rounded border-2 bg-white shadow-sm mt-10 mx-auto">
        <div className="text-2xl font-bold text-green-900 text-left ml-5">
          <span className="text-black">Weekly</span>
          {' '}
          {weeklyContent.length ? weeklyContent[0].locdate : null}
        </div>
        <div className="flex justify-end gap-5 h-10 text-right mr-5">
          <Button content="<" onClick={() => moveToWeek(-7)} />
          <Button content=">" onClick={() => moveToWeek(7)} />
        </div>

        <div className="m-3 mx-5 grid grid-cols-4 shadow">
          {weeklyContent.length
            ? weeklyContent.map((day, i) => <WeeklyDisplay key={v4()} idx={i} day={day} selectedDate={selectedDate} />)
            : null}
        </div>
      </div>
    </div>
  );
};

export default WeeklyPage;

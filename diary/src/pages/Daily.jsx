import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import DailyDisplayContainer from './Components/Daily/DailyDisplayContainer';
import DatepickerComponent from './Components/DatepickerComponent/DatepickerComponent';
import { setDate } from '@/Redux/action';
import { DAILY_LOGO } from '@/Constants/dailyConstant';

/**
 *
 * @param {selectedDate} date
 * @returns {string} 2021-08-01
 */

const getDateOffset = (dateInDaily) => {
  const offset = dateInDaily.getTimezoneOffset() * 60000;
  const dateOffset = new Date(dateInDaily.getTime() - offset);
  return dateOffset.toISOString().substring(0, 10);
};

function Daily() {
  const [selectedDate, setSelectedDate] = useState(null);
  // 기본 설정은 현재 날짜, 달력 선택한 날짜
  const dateInDaily = selectedDate || new Date();

  const dispatch = useDispatch();
  // date() 객체는 redux action 객체로 불러올 수 없음. 간단한 날짜 형식으로 바꿔 넣어주기
  // date변수가 파일마다 동일하게 많이 나온다,
  const date = getDateOffset(dateInDaily);
  useEffect(() => {
    dispatch(setDate(date));
  }, [dateInDaily]);

  return (
    <div className="bg-[#E5C7AF]">
      <div className="w-[964px] h-fit bg-white mx-auto">
        <DatepickerComponent
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <div className="w-fit px-3 m-5 border-2 border-black rounded-full text-xl">
          {DAILY_LOGO}
        </div>
        <DailyDisplayContainer />
      </div>
    </div>
  );
}

export default Daily;

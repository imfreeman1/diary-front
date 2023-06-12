/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initDaily, setDate } from 'src/Redux/action';
import StickerDisplay from 'src/Components/StickerDisplay/StickerDisplay';
import useAxios from 'src/hooks/useAxios';
import DailySaveMarker from 'src/Components/DailySaveMarker/DailySaveMarker';
import DailyDisplayContainer from '../Components/Daily/DailyDisplayContainer';
import { DAILY_CONST, GET_DAILY_DIARY_OPT } from '../Constants/dailyConstant';
import NavBarContainer from '../Components/NavBar/NavBarContainer';
import SideBarContainer from '../Components/SideBar/SideBarContainer';
import useGetDateOffset from '../hooks/useGetDateOffset';
/**
 *
 * @param {selectedDate} date
 * @returns {string} 2021-08-01
 */

const Daily = () => {
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { response, operation } = useAxios();
  const yearInMonth = selectedDate.getFullYear();
  const offsetDate = useGetDateOffset(selectedDate);
  const getReadDailyAxios = async () => {
    await operation(GET_DAILY_DIARY_OPT(offsetDate));
  };

  useEffect(() => {
    dispatch(initDaily({
      locdate: offsetDate,
      titleText: response?.result?.title || '',
      editorContent: response?.result?.content || '',
    }));
  }, [response]);

  useEffect(() => {
    dispatch(initDaily({ locdate: offsetDate, titleText: '', editorContent: '' }));
    dispatch(setDate(offsetDate));
    console.log('offsetDate', offsetDate);
    getReadDailyAxios();
  }, [offsetDate]);

  return (
    <>
      <NavBarContainer yearInMonth={yearInMonth} />
      <StickerDisplay pageDate={offsetDate} />
      <div className="h-full w-full p-5 bg-[#E5C7AF] ">
        <div className="bg-zinc-50 w-fit h-fit border pb-5 my-10 mx-auto shadow-lg rounded">
          <div className="flex justify-between">
            <div className="w-fit h-fit p-2 px-5 ml-5 mt-5 border-4 border-gray-200 font-bold text-2xl rounded-full shadow">
              <p>{DAILY_CONST.LOGO}</p>
            </div>
            <DailySaveMarker axiosCode={response?.code || ''} />
          </div>
          <DailyDisplayContainer
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </div>
      </div>
      <SideBarContainer pageDate={offsetDate} />
    </>
  );
};

export default Daily;

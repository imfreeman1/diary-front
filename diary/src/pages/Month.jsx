import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCal } from '@/Redux/action';
import MonthWeek from './Components/Month/MonthWeek';
import useCalendar from './hooks/useCalendar';

const dayOfTheWeek = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const MonthList = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]


const MonthPage = () => {

  let date = new Date();
  const dispatch = useDispatch();
  const {calendar} = useSelector((state)=> state.calendarReducer);

  useEffect(() => {
    dispatch(setCal(useCalendar("2023",MonthList[date.getMonth()])))
  }, [])
  
  return (
    <div className='flex justify-center pt-5 h-screen w-full bg-gray-100'>
      <div className='bg-white m-5 h-fit'>
        <div className='text-4xl border-black border-2 rounded-[50%] w-min px-6'>{date.getMonth()+1}</div>
        <div className='flex mb-2 mt-4'>
          {dayOfTheWeek.map((val, idx)=> 
            <div className={`w-32 flex justify-center ${val==="Sun"? "text-[#FF0000]":""}`} key={idx}>{val[0]}</div>
        )}
        </div>
        <table className='border-collapse border border-black'>
          {calendar.length?calendar.map((val,idx) => {
          return <MonthWeek key={idx} week={val}/>
          }):null
        }
        </table>
      </div>
    </div>
  )
}

export default MonthPage
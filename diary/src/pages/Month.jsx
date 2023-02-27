import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCal } from '@/Redux/action';
import MonthWeek from './Components/Month/MonthWeek';
import useCalendar from './hooks/useCalendar';
import { BiCaretUp, BiCaretDown } from "react-icons/bi";

const dayOfTheWeek = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const MonthList = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]

const MonthPage = () => {

  const date = new Date();
  const year = date.getFullYear()
  const [month, setMonth] = useState(date.getMonth())
  const dispatch = useDispatch();
  const {calendar} = useSelector((state)=> state.calendarReducer);

  const moveToLastMonth = () =>{
      if(month>0) setMonth(month-1)
    }
  const moveToNextMonth = () =>{
      if(month<11) setMonth(month+1)
    }
  useEffect(() => {
    dispatch(setCal(useCalendar(year,MonthList[month])))
  }, [month])

  return (
    <div className='flex justify-center pt-5 h-screen w-full bg-gray-100'>
      <div className='bg-zinc-50 m-5 h-fit border'>
        <div className='flex bg-zinc-50 gap-5'>
          <div className='text-3xl w-min px-6 my-auto'>
            <BiCaretUp onClick={()=>moveToNextMonth()} className="cursor-pointer text-gray-700 hover:text-red-700 hover:ring hover:ring-gray-300" />
            <BiCaretDown onClick={()=>moveToLastMonth()} className="cursor-pointer text-gray-700 hover:text-red-700 hover:ring hover:ring-gray-300" />
          </div>
          <p className='text-5xl w-fit px-6 m-3 text-gray-700 select-none'>{month+1}월</p>
        </div>
        <div className='flex my-2 border-2'>
          {dayOfTheWeek.map((val, idx)=> 
            <div className={`flex border w-36 text-lg font-bold justify-center ${val==="Sun"? "text-[#FF0000]":""}`} key={idx}>{val[0]}</div>
        )}
        </div>
        <table className='border-collapse border border-gray-500'>
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
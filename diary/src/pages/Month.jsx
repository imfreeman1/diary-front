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
      <div className='bg-white m-5 h-fit'>
        <div className='flex'>
          <p className='text-5xl w-fit px-6 m-3 text-gray-800'>{month+1}월</p>
          <div className='text-3xl w-min px-6 my-auto'>
            <BiCaretUp onClick={()=>moveToNextMonth()} className="cursor-pointer hover:text-red-700 hover:ring" />
            <BiCaretDown onClick={()=>moveToLastMonth()} className="cursor-pointer hover:text-red-700 hover:ring" />
          </div>
        </div>
        <div className='flex mb-2 mt-4 border-t-2'>
          {dayOfTheWeek.map((val, idx)=> 
            <div className={`flex w-36  text-lg font-bold justify-center ${val==="Sun"? "text-[#FF0000]":""}`} key={idx}>{val[0]}</div>
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
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCal } from '@/Redux/action';
import MonthWeek from './Components/Month/MonthWeek';
import useCalendar from './hooks/useCalendar';
import Button from './Components/Button';

const dayOfTheWeek = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const MonthList = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]

const MonthPage = () => {

  const date = new Date();
  const [month, setMonth] = useState(date.getMonth())

  const dispatch = useDispatch();
  const {calendar} = useSelector((state)=> state.calendarReducer);

  const moveToLastMonth = (month) =>{
      setMonth(date.getMonth()-1)
  }
  const moveToNextMonth = (month) =>{
      setMonth(date.getMonth()+1)
  }
  // useEffect(()=>{

  // },[month])
  useEffect(() => {
    dispatch(setCal(useCalendar("2023",MonthList[month])))
    console.log("check")
  }, [month])
  
  return (
    <div className='flex justify-center pt-5 h-screen w-full bg-gray-100'>
      <div className='bg-white m-5 h-fit'>
      <div className='inline text-4xl border-black border-2 rounded-[50%] w-min px-6 m-3'></div>
        <div className='text-4xl border-black border-2 rounded-[50%] w-min px-6 m-3'>{month+1}
        <Button onClick={(month)=>moveToLastMonth(month)} content="<"></Button>
        <Button onClick={(month)=>moveToNextMonth(month)} content=">"></Button>
        </div>
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
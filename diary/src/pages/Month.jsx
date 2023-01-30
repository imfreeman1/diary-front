import { setCal } from '@/Redux/action';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import MonthWeek from './Components/Month/MonthWeek';
import Holiday from './Json/holidays_kr.json'

const getCalendar = (year, month) =>{
    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    const dayOfTheWeek = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const monthStartDay = new Date(year, month*1-1, 1).getDay()

    const makeMonthTable = Array.from(Array(5),(_,idx)=>{
      let week = [];
      let startday = 1;
      for (let i of dayOfTheWeek) {
        let dateObj = {};
        let date = (idx*7)-monthStartDay+startday++
        if(date>monthDays[month*1 -1]||date<1) date = undefined
        dateObj.date = date;
        if(date) dateObj.locdate = `${year}-${month}-`+ date.toString().padStart(2,"0")
        else dateObj.locdate = undefined
        dateObj.day = i;
        dateObj.dateName = Holiday[year][dateObj.locdate]
        dateObj.isHoliday = i==="Sun"? true: dateObj.dateName?true:false
        week.push(dateObj);
      }
      return week;
    });

    return makeMonthTable
    
}
const dayOfTheWeek = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

const MonthPage = () => {
  let date = new Date();
  const dispatch = useDispatch();
  const MonthList = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]
  dispatch(setCal(getCalendar("2023",MonthList[date.getMonth()])))
  const {calendar} = useSelector((state)=> state.calendarReducer);
  useEffect(() => {
  console.log(calendar)

  }, [!calendar])
  
  return (
    <div className='flex justify-center pt-5 h-full w-full bg-orange-200'>
      <div className='bg-white'>
        <div className='text-4xl border-black border-2 rounded-[50%] w-min px-6'>{date.getMonth()+1}</div>
        <div className='flex mb-2 mt-4'>
          {dayOfTheWeek.map((val, idx)=> 
            <div className={`w-32 flex justify-center ${val==="Sun"? "text-[#FF0000]":""}`} key={idx}>{val}</div>
        )}
        </div>
        <table className='border-collapse border border-black'>
          {calendar.map((val,idx) => {
          return <MonthWeek key={idx} week={val}/>
          })
        }
        </table>

      </div>
    </div>
  )
}

export default MonthPage
import React from 'react'
import MonthWeek from './Month/MonthWeek';

const getCalendar = (year, month) =>{
    // 윤달
    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    const dayOfTheWeek = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const monthStartDay = new Date(year, month, 1).getDay()

    const makeMonthTable = Array.from(Array(5),(_, idx)=>{
      let week = [];
      let startday = 1;
      for (let i of dayOfTheWeek) {
        let dateObj = {};
        let date = (idx*7)-monthStartDay+startday++
        if(date>monthDays[month]||date<1) date = undefined
        dateObj.locdate = date;
        dateObj.day = i;
        dateObj.isHoliday = i==="Sun"? true: false
        dateObj.dateName = ""
        week.push(dateObj);
      }
      return week;
    });

    return makeMonthTable
    
}
// date.getFullYear(); date.getMonth() + 1; date.getDate();
const dayOfTheWeek = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

const MonthPage = () => {
  // getRestDeInfo("2021", "02")
  let monthTable = getCalendar(2023,1)
  console.log(monthTable)
  return (
    <div className='flex justify-center pt-5 h-full w-full bg-orange-200'>
      <div className='bg-white'>
        <div className='text-4xl border-black border-2 rounded-[50%] w-min px-6'>2</div>
        <div className='flex mb-2 mt-4'>
          {dayOfTheWeek.map((val, idx)=> 
            <div className={`w-32 flex justify-center ${val==="Sun"? "text-[#FF0000]":""}`} key={idx}>{val}</div>
        )}
        </div>
        <table className='border-collapse border border-black'>
          {monthTable.map((val,idx) => {
          return <MonthWeek key={idx} week={val}/>
          })
        }
        </table>

      </div>
    </div>
  )
}

export default MonthPage

/*
 요일별로 객체 만들 예정

 {locdate : 1,
  day : "Sun",
  isHoliday: true}
 */
import React from 'react'
import MonthWeek from './Month/MonthWeek';

const days = ["Sun","Sat","Mon","Tue","Wed","Thu","Fri"];
const monthTable = Array.from(Array(5),(val)=>{
  let arr = [];
  for (let i of days) {
    let obj = {};
    obj.day = i;
    obj.isHoliday = i==="Sun"? true: false
    
    arr.push(obj);
  }
  return arr;
});


const MonthPage = () => {
  console.log(monthTable);
  return (
    <div className='flex justify-center pt-5 h-full w-full bg-orange-200'>
      <div className='bg-white'>
        <div className='text-4xl border-black border-2 rounded-[50%] w-min px-6'>5</div>
        <div className='flex mb-2 mt-4'>{days.map((val)=> {
          return val==="Sun"?<div className='w-32 flex justify-center text-[#FF0000]'>{val}</div>:<div className='w-32 flex justify-center'>{val}</div>
        })}
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
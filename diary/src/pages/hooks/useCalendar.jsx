import React from 'react'
import Holiday from '../Json/holidays_kr.json'

const useCalendar = (year, month) =>{
    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    const dayOfTheWeek = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const monthStartDay = new Date(year, month*1-1, 1).getDay()

    const makeMonthTable = Array.from(Array(6),(_,idx)=>{
      let week = [];
      let startday = 1;
      for (let i of dayOfTheWeek) {

        let dateObj = {};
        let date = (idx*7)-monthStartDay+startday++
        if(date>monthDays[month*1 -1]) {
          dateObj.locdate = false
          dateObj.date = date - monthDays[month*1 -1]
          dateObj.isInMonth = false
          if(idx===5 && i==="Sun") break
        }
        else if(date<1) {
          dateObj.locdate = false
          dateObj.date = date + (31 && monthDays[month*1 -2]) 
          dateObj.isInMonth = false
        }
        else {
          dateObj.locdate = `${year}-${month}-`+ date.toString().padStart(2,"0")
          dateObj.date = date;
          dateObj.isInMonth = true
        }
        dateObj.day = i;
        dateObj.dateName = Holiday[year][dateObj.locdate]?Holiday[year][dateObj.locdate]:""
        dateObj.isHoliday = i==="Sun"? true: dateObj.dateName?true:false
        dateObj.todos = [];
        week.push(dateObj);
      }
      return week;
    });

    return makeMonthTable
    
}

export default useCalendar;
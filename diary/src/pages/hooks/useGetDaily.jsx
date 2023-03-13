import React from 'react'

/**
 * 
 * @param {dateInDaily} str (0000-00-00)
 * @returns 
 */

const useGetDaily = (date) => {
    const WEEKDAY = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    const dateInDaily = new Date(date)

    // const dailyContent = {locdate:date,week:WEEKDAY[dateInDaily.getDay()],titleText:"",editorContent:"" }
    const dailyContent = {};
    dailyContent.locdate = date
    dailyContent.week = WEEKDAY[dateInDaily.getDay()] 
    dailyContent.titleText =""
    dailyContent.editorContent = ""
  return dailyContent
}

export default useGetDaily;
import React from 'react'

/**
 * 
 * @param {dateInDaily} date
 * @returns 
 */

const useGetDaily = (dateInDaily) => {
    const WEEKDAY = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

    const dateOffset = (dateInDaily) => {
        const offset = dateInDaily.getTimezoneOffset() * 60000
        const dateOffset = new Date(dateInDaily.getTime() - offset)
        return dateOffset.toISOString().substring(0, 10)
      }
    const dailyContent = {}
    // dailyContent.dateInDaily = dateInDaily
    dailyContent.locdate = (dateOffset(dateInDaily)) 
    dailyContent.week = WEEKDAY[dateInDaily.getDay()] 
    dailyContent.text =""
    dailyContent.editorContent = ""
  return dailyContent
}

export default useGetDaily;
import React from 'react'

const useGetWeekly = (dateInWeekly) => {
    
    const days = ["Weekly", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    const week = dateInWeekly.getDay()
    const calcMon = dateInWeekly.getDate() - week; 
    const nextDate = (calc) =>{
        let copyDate = new Date (dateInWeekly)
        return new Date(copyDate.setDate(calc)).toISOString().substring(0, 10);
    } 
    const weeklyPlan = []
    for(let i=0; i<days.length; i++){
        let weekObj={}
        weekObj.days = days[i] 
        if(i) {
        weekObj.date = calcMon + i
        weekObj.locdate = nextDate(calcMon + i)
        }
        weeklyPlan.push(weekObj)
    }
    return weeklyPlan
}

export default useGetWeekly
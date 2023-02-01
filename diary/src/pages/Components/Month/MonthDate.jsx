import React from 'react'

const MonthDate = ({onClick, dayInfo}) => {
  return (
    <td onClick={()=>onClick(dayInfo)} className={`border w-32 h-32 border-black ${dayInfo.isHoliday?"text-[#FF0000]":"text-black"}`}>{dayInfo.date} {dayInfo.dateName}</td>
  )
}

export default MonthDate

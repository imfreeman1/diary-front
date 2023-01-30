import React from 'react'

const MonthDate = ({isHoliday,day,key}) => {
  return (
    <td className={`border w-32 h-32  border-black ${isHoliday? 'text-[#FF0000]' : null}`} key={key}>{day}</td>
  )
}

export default MonthDate
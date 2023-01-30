import React from 'react'

const MonthDate = ({locdate, day, isHoliday}) => {
  return (
    <td className={`border w-32 h-32 border-black ${isHoliday?"text-[#FF0000]":"text-black"}`}>{locdate}</td>
  )
}

export default MonthDate

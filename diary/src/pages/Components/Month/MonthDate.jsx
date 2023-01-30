import React from 'react'

const MonthDate = ({date, dateName, isHoliday}) => {
  return (
    <td className={`border w-32 h-32 border-black ${isHoliday?"text-[#FF0000]":"text-black"}`}>{date} {dateName}</td>
  )
}

export default MonthDate

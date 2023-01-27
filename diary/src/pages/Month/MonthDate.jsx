import React from 'react'

const MonthDate = ({isHoliday,day,key}) => {
  return (
    isHoliday?<td className='border w-32 h-32 text-[#FF0000] border-black' key={key}>{day}</td> : <td className='border border-black w-32 h-32' key={key}>{day}</td>
  )
}

export default MonthDate
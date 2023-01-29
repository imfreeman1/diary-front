import React from 'react'

const MonthDate = ({isHoliday,day}) => {
  return (
    isHoliday?<td className='border w-32 h-32 text-[#FF0000] border-black'>{day}</td> : <td className='border border-black w-32 h-32'>{day}</td>
  )
}

export default MonthDate
import React from 'react'
import MonthDate from './MonthDate'


const MonthWeek = ({week,key}) => {
  return (
    <tbody>
      <tr className='flex' key={key}>{week.map((val,idx) => {
        return <MonthDate isHoliday={val.isHoliday} day={val.day}/>
      })}
      </tr>
    </tbody>
  )
}

export default MonthWeek
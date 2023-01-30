import React from 'react'
import MonthDate from './MonthDate'


const MonthWeek = ({week}) => {
  return (
    <tbody>
      <tr className='flex' >{week.map((val,idx) => {
        return <MonthDate date={val.date} day={val.day} dateName={val.dateName} isHoliday={val.isHoliday} key={idx}/>
      })}
      </tr>
    </tbody>
  )
}

export default MonthWeek
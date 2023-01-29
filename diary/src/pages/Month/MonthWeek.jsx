import React from 'react'
import MonthDate from './MonthDate'


const MonthWeek = ({week}) => {
  return (
    <tbody>
      <tr className='flex' >{week.map((val,idx) => {
        return <MonthDate isHoliday={val.isHoliday} day={val.day} key={idx}/>
      })}
      </tr>
    </tbody>
  )
}

export default MonthWeek
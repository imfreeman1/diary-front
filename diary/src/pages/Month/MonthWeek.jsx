import React from 'react'
import MonthDate from './MonthDate'


const MonthWeek = ({week}) => {
  return (
    <tbody>
      <tr className='flex' >{week.map((val,idx) => {
        return <MonthDate locdate={val.locdate} day={val.day} isHoliday={val.isHoliday} key={idx}/>
      })}
      </tr>
    </tbody>
  )
}

export default MonthWeek
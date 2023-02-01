import React from 'react'
import MonthDate from './MonthDate'


const MonthWeek = ({week, onClick}) => {
  return (
    <tbody>
      <tr className='flex' >{week.map((val,idx) => {
        return <MonthDate dayInfo={val} onClick={onClick} key={idx}/>
      })}
      </tr>
    </tbody>
  )
}

export default MonthWeek
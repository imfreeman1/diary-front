import React from 'react'
import MonthDate from './MonthDate'


const MonthWeek = ({week}) => {
  return (
    <tbody>
      <tr className='flex' >{week.map((val,idx) => {
        return <MonthDate dayInfo={val} key={idx}/>
      })}
      </tr>
    </tbody>
  )
}

export default MonthWeek
import React from 'react'
import MonthDate from './MonthDate'

/**
 * 
 * @param {week} list
 * @returns 
 */

const MonthWeek = ({week}) => {
  return (
    <tbody>
      <tr className='flex'>
        {/* val => dayInfo */}
        {week.map((val,idx) => {
        return <MonthDate dayInfo={val} key={idx}/>
      })}
      </tr>
    </tbody>
  )
}

export default MonthWeek
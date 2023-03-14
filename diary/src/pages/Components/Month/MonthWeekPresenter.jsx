import React from 'react'
import MonthDate from './MonthDate'
import { v4 } from "uuid"

/**
 * @param {week} list
 * @returns 
 */

const MonthWeek = ({week}) => {
  return (
    <tbody>
      <tr className='flex'>
        {week.map((dayInfo) => {
        return <MonthDate dayInfo={dayInfo} key={v4()}/>
      })}
      </tr>
    </tbody>
  )
}

export default MonthWeek
import React from 'react'

const WeeklyDiaplay = ({day}) => {

  return (
    <div className='w-[240px] h-[450px] bg-white border-2 border-black border-solid'>
        <div className='text-xl font-bold mt-10'>{day}</div>
        <textarea></textarea>
    </div>
  )
}

export default WeeklyDiaplay
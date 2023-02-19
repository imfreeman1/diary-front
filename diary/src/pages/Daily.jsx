import React from 'react'
import DailyDisplay from './Components/Daily/DailyDisplay'

const Daily = () => {
  return (
    <div className='bg-[#E5C7AF]'>
        <div className='w-[964px] h-fit bg-white mx-auto'>
            <div className='w-fit px-3 m-5 border-2 border-black rounded-full text-xl'>Daily</div>
            <DailyDisplay></DailyDisplay>
        </div>
    </div>
  )
}

export default Daily
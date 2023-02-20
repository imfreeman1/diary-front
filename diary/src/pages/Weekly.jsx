import React from 'react'
import WeeklyDiaplay from './Components/Weekly/WeeklyDiaplay'

const Weekly = () => {
    const days = ["Weekly", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

  return (
    <div className='h-screen bg-[#9DBC9D] text-center'>Weekly
        <div className='w-fit h-fit border-2 border-white border-solid mt-10 mx-auto'>
            <div className='h-10 text-right mr-5'> W1 W2 W3 W4 W5 </div>
            <div className='grid grid-cols-4'>
                {days.map((day, i)=>
                <WeeklyDiaplay key={i} day={day}/>
                )}
            </div>
        </div>
    </div>
  )
}

export default Weekly
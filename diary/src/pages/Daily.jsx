import React from 'react'
import { useState } from 'react'
import DailyDisplay from './Components/Daily/DailyDisplay'
import DatepickerComponent from './Components/DatepickerComponent/DatepickerComponent'

const Daily = () => {
	const [show, setShow] = useState(false)
  	const [selectedDate, setSelectedDate] = useState(null)

  return (
    <div className='bg-[#E5C7AF]'>

        <div className='w-[964px] h-fit bg-white mx-auto'>
			<DatepickerComponent selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            <div className='w-fit px-3 m-5 border-2 border-black rounded-full text-xl'>Daily</div>
            <DailyDisplay selectedDate={selectedDate} />
        </div>

    </div>
  )
}

export default Daily
import React from 'react'
import { useState } from 'react'
import Datepicker from "tailwind-datepicker-react"
import DailyDisplay from './Components/Daily/DailyDisplay'

const Daily = () => {
	const [show, setShow] = useState(false)
  const [selectedDate, setSelectedDate] = useState(null)
	const handleChange = (selectedDate) => {
		setSelectedDate(selectedDate)
    console.log(selectedDate)
	}
	const handleClose = (state) => {
		setShow(state)
	}
  return (
    <div className='bg-[#E5C7AF]'>

        <div className='w-[964px] h-fit bg-white mx-auto'>
            <div className="absolute inset-y-0 left-0">
                <Datepicker options={options} onChange={handleChange} show={show} setShow={handleClose} />
            </div>

            <div className='w-fit px-3 m-5 border-2 border-black rounded-full text-xl'>Daily</div>
            <DailyDisplay selectedDate={selectedDate}></DailyDisplay>
        </div>

    </div>
  )
}

const options = {
	title: "날짜 선택하기",
	autoHide: true,
	todayBtn: false,
	clearBtn: false,
	maxDate: new Date("2023-12-31"),
	minDate: new Date("2023-01-01"),
	theme: {
		background: "bg-parent",
		todayBtn: "",
		clearBtn: "",
		icons: "",
		text: "",
		disabledText: "text-gray-500",
		input: "",
		inputIcon: "",
		selected: "",
	},
	icons: {
		prev: () => <span>Previous</span>,
		next: () => <span>Next</span>,
	},
	datepickerClassNames: "top-12",
	defaultDate: new Date("2023-02-01"),
	language: "en",
}

export default Daily
import React, { useState } from 'react'
import Datepicker from "tailwind-datepicker-react"

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

const DatepickerComponent = ({selectedDate, setSelectedDate}) => {
	const [show, setShow] = useState(false)
	
	const handleClose = (state) => {
		setShow(state)
	}
	const handleChange = (selectedDate) => {
		setSelectedDate(selectedDate)
	}
	
  return (
    <div className="absolute inset-y-0 left-0">
        <Datepicker options={options} onChange={handleChange} show={show} setShow={handleClose} />
    </div>
  )
}

export default DatepickerComponent
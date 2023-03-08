import React, { useEffect, useState } from 'react'
import DailyDisplay from './Components/Daily/DailyDisplay'
import DatepickerComponent from './Components/DatepickerComponent/DatepickerComponent'
import { useDispatch } from 'react-redux'
import { setDate } from '@/Redux/action'

/**
 * 
 * @param {selectedDate} date
 * @returns 
 */

const dateOffset = (dateInDaily) => {
  const offset = dateInDaily.getTimezoneOffset() * 60000
  const dateOffset = new Date(dateInDaily.getTime() - offset)
  return dateOffset.toISOString().substring(0, 10)
}

const Daily = () => {
  const [selectedDate, setSelectedDate] = useState(null)
  // 기본 설정은 현재 날짜, 달력 선택한 날짜
  const dateInDaily = (selectedDate? selectedDate: new Date())

  const dispatch = useDispatch()
  // date() 객체는 redux action 객체로 불러올 수 없음. 간단한 날짜 형식으로 바꿔 넣어주기
  const date = dateOffset(dateInDaily)
  useEffect(() => {
    dispatch(setDate(date))
  },[dateInDaily])


  return (
    <div className='bg-[#E5C7AF]'>
        <div className='w-[964px] h-fit bg-white mx-auto'>
		        <DatepickerComponent selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            <div className='w-fit px-3 m-5 border-2 border-black rounded-full text-xl'>Daily</div>
            <DailyDisplay />
        </div>
    </div>
  )
}

export default Daily
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import DatepickerComponent from './Components/DatepickerComponent/DatepickerComponent';
import Button from './Components/Button'
import WeeklyDisplay from './Components/Weekly/WeeklyDisplay'
import useGetWeekly from './hooks/useGetWeekly'
import { setWeek } from '@/Redux/action';
import NavBarContainer from './Components/NavBar/NavBarContainer';

const Weekly = () => {
  const dateInWeekly = new Date()
  const [selectedDate, setSelectedDate] = useState(dateInWeekly)
  let [year, month, weeks] = [selectedDate.getFullYear(), selectedDate.getMonth()+1, selectedDate.getDate()/7>>0]
  const dispatch = useDispatch();
  const {weeklyContent} = useSelector((state)=> state.weeklyReducer);
  console.log(weeklyContent)
  useEffect(() => {
    dispatch(setWeek(useGetWeekly(selectedDate)))
  }, [selectedDate])

  const moveToLastWeek = () =>{
    setSelectedDate(new Date(selectedDate.setDate(selectedDate.getDate()-7)))
  }
  const moveToNextWeek = () =>{
    setSelectedDate(new Date(selectedDate.setDate(selectedDate.getDate()+7)))
  }
  return (
    <>
    <NavBarContainer />
    <div className='h-screen bg-[#9DBC9D] text-center'>Weekly
        <DatepickerComponent selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
        <div className='w-fit h-fit rounded border-2 bg-white shadow-sm mt-10 mx-auto'>
            <div className='text-2xl font-bold text-green-900 text-left ml-5'>{year}. {month} --- {weeks+1} Weeks</div>
            <div className='flex justify-end gap-5 h-10 text-right mr-5'> 
              <Button content="<" onClick={moveToLastWeek} />
              <Button content=">" onClick={moveToNextWeek} />
            </div>
            <div className='m-3 mx-5 grid grid-cols-4 shadow'>
                {weeklyContent.length?weeklyContent.map((day, i)=>
                <WeeklyDisplay key={i} day={day}/>
                ):null}
            </div>
        </div>
    </div>
    </>
  )
}

export default Weekly
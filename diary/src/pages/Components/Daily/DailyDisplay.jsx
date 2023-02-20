import Tiptap from '@/pages/Components/Tiptap/Tiptap'
import React from 'react'
import RoundLine from '../RoundLine'

const DailyDisplay = ({selectedDate}) => {
    let dateInDaily = new Date()
    if(selectedDate) {
        dateInDaily = selectedDate
    }
    let [year, month, date] = [dateInDaily.getFullYear(), dateInDaily.getMonth()+1, dateInDaily.getDate()]
    const WEEKDAY = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    let week = WEEKDAY[dateInDaily.getDay()]

  return (
    <div >
        <div className='h-fit mx-20 my-5 p-2 border-4 border-gray-100 shadow-sm'> 
            <div className='flex m-5'>
                <RoundLine/>
                <RoundLine/>
                <RoundLine/>
                <RoundLine/>
                <RoundLine/>
                <RoundLine/>
                <RoundLine/>
                <RoundLine/>
                <RoundLine/>
                <RoundLine/>
                <RoundLine/>
            </div>
            <div className='flex text-center text-xl font-bold'>
                <div className='basis-1/2'>
                   {year} . {month} . {date} 
                </div>
                <div className='basis-1/2 text-white bg-slate-400'>
                    {week}
                </div>
            </div>
            <div className='m-10'>
                <label className='block mb-2 text-md font-medium text-gray-900 dark:text-gray-400'>Title</label>
                <textarea rows="1" maxLength="10" className='block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500' placeholder='title...'></textarea>
            </div>
            <div className='border-2 border-gray-200 overflow-hidden'>
                <Tiptap></Tiptap>
            </div>


        </div>
    </div>
  )
}

export default DailyDisplay
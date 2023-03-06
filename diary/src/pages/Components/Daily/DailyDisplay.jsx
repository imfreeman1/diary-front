import Tiptap from '@/pages/Components/Tiptap/Tiptap'
import useGetDaily from '@/pages/hooks/useGetDaily'
import { setDaily } from '@/Redux/action'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import RoundLine from '../RoundLine'

/**
 * 
 * @param {selectedDate} date
 * @param {dailyContent} obj
 * @returns 
 */

const DailyDisplay = ({selectedDate}) => {
    const dateInDaily = (selectedDate? selectedDate: new Date())

    const dispatch = useDispatch()
    const dailyContent = useGetDaily(dateInDaily)
    console.log(dailyContent)

    useEffect(() => {
        dispatch(setDaily(useGetDaily(dateInDaily)))
    }, [selectedDate])
    
  return (
    <div>
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
            <div className='flex text-center text-xl font-bold border'>
                <div className='basis-1/2'>{dailyContent.locdate}</div>
                <div className='basis-1/2 text-white bg-slate-400'>{dailyContent.week}</div>
            </div>
            <div className='m-5 my-20'>
                <label className='block mb-2 text-md font-medium text-gray-900 dark:text-gray-400'>Title</label>
                <textarea rows="1" className='block min-h-[52px] max-h-[52px] p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-300 focus:border-blue-300' placeholder='...'></textarea>
            </div>
            <div className='border-2 border-gray-200 overflow-hidden'>
                <Tiptap dateInDaily={dateInDaily}/>
            </div>
        </div>
    </div>
  )
}

export default DailyDisplay
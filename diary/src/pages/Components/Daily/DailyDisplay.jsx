import Tiptap from '@/pages/Components/Tiptap/Tiptap'
import useGetDaily from '@/pages/hooks/useGetDaily'
import { setDaily, setTitle } from '@/Redux/action'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RoundLine from './RoundLine'

/**
 * 
 * @param {selectedDate} date
 * @param {dailyContent} obj
 * @returns 
 */

const DailyDisplay = () => {

    const dispatch = useDispatch()

    const {dailyContent} = useSelector((state)=>state.dailyReducer)
    const {date} = useSelector((state)=>state.dailyReducer.dailyContent)
    const daily = useSelector((state)=>state.dailyReducer.dailyContent[`D-${date}`])

    const initContent = daily?daily.titleText?daily.titleText:"":""
    const [content, setContent] = useState("")
    console.log(dailyContent)
    
    useEffect(() => {
        if(date) dispatch(setDaily(useGetDaily(date)))
        setContent(initContent)
    }, [date])

    useEffect(() => {
        dispatch(setTitle({titleText: content, locdate: date}))
    }, [content])
    
    const handleInput = (e) =>{
        setContent(e.target.value)
    }

  return (
    <div className='h-fit mx-20 my-5 p-2 border-4 border-gray-100 shadow-sm'> 
        <RoundLine/>
        <div className='flex text-center text-xl font-bold border'>
            <div className='basis-1/2'>{daily?daily.locdate:null}</div>
            <div className='basis-1/2 text-white bg-slate-400'>{daily?daily.week:null}</div>
        </div>
        <div className='m-5 my-20'>
            <label className='block mb-2 text-md font-medium text-gray-900 dark:text-gray-400'>Title</label>
            <textarea 
                rows={1}
                spellCheck="false"
                value={content}
                onInput={handleInput}
                className='block min-h-[52px] max-h-[52px] p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-300 focus:border-blue-300'></textarea>
        </div>
        <div className='border-2 border-gray-200 overflow-hidden'>
            <Tiptap />
        </div>
    </div>
  )
}

export default DailyDisplay
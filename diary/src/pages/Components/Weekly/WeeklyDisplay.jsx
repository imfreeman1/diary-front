import { setWeekText } from '@/Redux/action'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

/**
 * 
 * @param {day} obj
 * @returns 
 */

const WeeklyDisplay = ({idx}) => {

    const weekly = useSelector((state)=>state.weeklyReducer.weeklyContent[idx])
    const [content, setContent] = useState("")
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(setWeekText({content:content, idx: idx}))
    }, [content])
    
    const handleInput = (e) => {
      setContent(e.target.value)
    }

    return (
      <div className='relative w-[250px] h-[450px] bg-white rounded-xl border-2 border-black border-dashed'>
          <div className='absolute m-3 w-5 h-5 border-2 border-black rounded-full'></div>
          <div className='text-xl font-bold mt-10'>{weekly.day}</div>
          <textarea 
            spellCheck="false"
            value={content}
            onInput={handleInput}
            className='block min-h-[200px] max-h-[200px] mt-5 mx-auto p-4 border-4 overflow-hidden rounded-lg'></textarea>
          <div className='absolute bottom-0 right-0 m-3 text-sm text-gray-400'>{weekly.locdate}</div>

      </div>
    )
}

export default WeeklyDisplay
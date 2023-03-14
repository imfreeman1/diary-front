import { setTodo } from '@/Redux/action';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { BiX } from 'react-icons/bi'

/**
 * 
 * @param {dayInfo} obj
 * @param {inputModalVisible} boolean
 * @param {handleInputModalClose} func
 * @returns 
 */

const MonthInputModal = ({ dayInfo, inputModalVisible, handleInputModalClose }) => {
  const dispatch = useDispatch()
  const [inputText, setInputText] = useState("")
  const focusRef = useRef();

  const handleChange = (e) => {
    setInputText(e.target.value)
  };

  const handleKeyPress = (e) => {
      e.preventDefault()
      dispatch(setTodo({"text":inputText, "dayInfo":dayInfo}))
      setInputText("");
      handleInputModalClose()
    }

  useEffect(()=>{
    if(inputModalVisible) focusRef.current.focus()
  },[inputModalVisible])

  return (
    (inputModalVisible && dayInfo.locdate ?
      <div className='z-0 absolute inset-x-auto w-96 h-fit bg-white text-right select-none rounded drop-shadow-2xl'>
        <div className='flex m-3 justify-end'>
          <BiX size="25" onClick={()=>handleInputModalClose()} className="rounded cursor-pointer hover:bg-gray-200"/>
        </div>
        <div className='text-left m-10'>
          <form onSubmit={handleKeyPress}>
            <span>■ </span>
            <input placeholder='입력하세요' value={inputText} ref={focusRef} onChange={handleChange} className="text-xl m-1 pl-2 border-b-2"/>
          </form>
        </div>
      </div>
    : null
    )
  )
}

export default MonthInputModal
import { setTodo } from '@/Redux/action';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import Button from '../Button';

const MonthInputModal = ({ dayInfo, visible, handleModalClose }) => {
  const dispatch = useDispatch()
  const [text, setText] = useState("")
  const focusRef = useRef();

  const handleChange = (e) => {
    setText(e.target.value)
  };

  const handleKeyPress = (e) => {
      e.preventDefault()
      dispatch(setTodo({"text":text, "dayInfo":dayInfo}))
      setText("");
      handleModalClose()
    }

  useEffect(()=>{
    if(visible) focusRef.current.focus()
  },[visible])

  return (
    (visible && dayInfo.locdate ?
      <div className='z-0 absolute inset-x-auto w-96 h-fit bg-white text-right select-none rounded drop-shadow-2xl'
      >
        <div className='m-3'>
          <Button onClick={()=>handleModalClose()} content="X" />
        </div>
        <div className='text-left m-10'>
          <form onSubmit={handleKeyPress}>
            <span>■ </span><input placeholder='입력하세요' value={text} ref={focusRef} onChange={handleChange} className="text-xl border-b-2"></input>
          </form>
        </div>
      </div>
    : null
    )
  )
}

export default MonthInputModal
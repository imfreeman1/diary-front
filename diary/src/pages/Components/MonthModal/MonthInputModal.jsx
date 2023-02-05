import { setTodo } from '@/Redux/action';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button';

const MonthInputModal = ({dayInfo, visible, handleModalClose}) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("")
  
  const handleChange = (e) => {
    setText(e.target.value)
  };

  const handleKeyPress = (e) => {
      e.preventDefault()
      dispatch(setTodo([text, dayInfo]))
      setText("");
    }

  return (
    (visible && dayInfo.locdate ?
      <div className='z-0 absolute inset-x-auto w-96 h-fit bg-white text-right select-none rounded drop-shadow-2xl'>
        <div className='m-3'>
          <Button onClick={()=>handleModalClose()} content="X" />
        </div>
        <div className='text-left m-10'>
          <form  onSubmit={handleKeyPress}>
            <span>■ </span><input className = "text-xl border-b-2 " placeholder='입력하세요' value={text} onChange={handleChange} ></input>
          </form>
        </div>
      </div>
    : null
    )
  )
}

export default MonthInputModal
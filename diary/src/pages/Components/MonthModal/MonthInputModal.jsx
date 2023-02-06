import { closeModal, setTodo } from '@/Redux/action';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button';

const MonthInputModal = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("")
  // const modalRef = useRef();
  const {visible} = useSelector((state)=>state.modalReducer)
  console.log(visible)
  
  const handleChange = (e) => {
    setText(e.target.value)
  };

  const handleKeyPress = (e) => {
      e.preventDefault()
      dispatch(setTodo([text, dayInfo]))
      setText("");
    }

  return (
    (visible ?
      <div className='z-0 absolute inset-x-auto w-96 h-fit bg-white text-right select-none rounded drop-shadow-2xl'>
        <div className='m-3'>
          <Button onClick={()=>dispatch(closeModal())} content="X" />
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
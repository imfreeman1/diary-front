import { delTodo, editTodo } from '@/Redux/action';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import Button from '../Button';

const MonthEditModal = ({ref, modalOutSideClick, todo, dayInfo, itemVisible, handleItemModalClose}) => {

    const dispatch = useDispatch();
    const [edited, setEdited] =useState(false)
    const [text, setText] = useState(todo.text)
  
    const handleKeyPress = (e) => {
        e.preventDefault()
        dispatch(editTodo([text, todo]))
        setEdited(false)
      }
    const handleEditText = (e) =>{
        setText(e.target.value)
    }
    const onDelete = (todo) => {
        dispatch(delTodo(todo));
    };
      console.log(todo)
  return (
    (itemVisible && dayInfo.locdate ?
      <div className='z-0 absolute inset-x-auto w-96 h-fit bg-white text-right select-none rounded drop-shadow-2xl'>
        <div className='m-3'>

            <Button onClick={()=>setEdited(true)} content="수정" />
            <Button onClick={()=>setEdited(false)} content="확인" />
            <Button onClick={()=>onDelete(todo)} content="삭제" />
            <Button onClick={()=>handleItemModalClose()} content="옮기기" />
          <Button onClick={()=>handleItemModalClose()} content="X" />
        </div>
        <div className='text-left m-10'>
            {edited ? 
            <form  onSubmit={handleKeyPress}>
                <span>■ </span><input className = "text-xl border-b-2 " placeholder='입력하세요' value={text} onChange={handleEditText} ></input>
            </form>
            : <><span>■ </span><span>{todo.text}</span></>
            }
        </div>
      </div>
    : null
    )
  )
}

export default MonthEditModal;
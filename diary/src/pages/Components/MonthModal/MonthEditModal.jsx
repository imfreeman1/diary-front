import { delTodo, editTodo } from '@/Redux/action';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import Button from '../Button';

const MonthEditModal = ({todo, dayInfo, itemVisible, handleItemModalClose}) => {

    const dispatch = useDispatch();
    const [edited, setEdited] =useState(false)
    const [text, setText] = useState(todo.text)
    const focusRef = useRef()
  
    const handleKeyPress = (e) => {
        e.preventDefault()
        dispatch(editTodo({"text": text, "todo": todo}))
        setEdited(false)
      }
    const handleEditText = (e) =>{
        setText(e.target.value)
    }
    const onDelete = (todo) => {
        dispatch(delTodo(todo));
    };
      console.log(todo)

    useEffect(()=>{
      if(itemVisible && edited) focusRef.current.focus()
    },[itemVisible, edited])
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
                <span>■ </span><input placeholder='입력하세요' value={text} ref={focusRef} onChange={handleEditText} className = "text-xl border-b-2"></input>
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
import { delTodo, editTodo } from '@/Redux/action';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { BiEdit, BiTrash, BiTransfer, BiX } from 'react-icons/bi'

/**
 * 
 * @param {todo} obj
 * @param {dayInfo} obj
 * @param {itemVisible} boolean
 * @param {handleItemModalClose} func
 * @returns 
 */

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

    useEffect(()=>{
      if(itemVisible && edited) focusRef.current.focus()
    },[itemVisible, edited])
    
  return (
    (itemVisible && dayInfo.locdate ?
      <div className='z-0 absolute inset-x-auto w-96 h-fit bg-white text-right select-none rounded drop-shadow-2xl'>
          <div className='m-3 flex flex-row-reverse'>
            <BiX onClick={()=>handleItemModalClose()} size="25" className='rounded cursor-pointer hover:bg-gray-200' />
            <BiTransfer size="25" className='rounded cursor-pointer hover:bg-gray-200' />
            <BiTrash onClick={()=>onDelete(todo)} size="25" className='rounded cursor-pointer hover:bg-gray-200' />
            <BiEdit onClick={()=>setEdited(true)} size="25" className='rounded cursor-pointer hover:bg-gray-200' />
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
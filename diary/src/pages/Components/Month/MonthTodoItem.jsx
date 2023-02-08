import useOnClickOutside from '@/pages/hooks/useOnClickOutSide'
import React, { useRef, useState } from 'react'
import MonthEditModal from '../MonthModal/MonthEditModal'

const MonthTodoItem = ({idx, todo, dayInfo}) => {
  const [itemVisible, setItemVisible] = useState(false)
  const editModalRef = useRef()

  const handleItemModalOpen = () =>{
    setTimeout(() => {
      setItemVisible(true)
    }, 300);
}

  const handleItemModalClose = () =>{
    setItemVisible(false)
  }

  useOnClickOutside(editModalRef, () => setItemVisible(false))

  return (
    <>
    <li key={idx} onClick={()=>handleItemModalOpen()} className="truncate bg-red-100 p-1 my-2">{todo.text}</li>
    <div ref={editModalRef}>
        <MonthEditModal todo={todo} dayInfo={dayInfo} itemVisible={itemVisible} handleItemModalClose={handleItemModalClose}></MonthEditModal>
    </div>
    </>
  )
}

export default MonthTodoItem
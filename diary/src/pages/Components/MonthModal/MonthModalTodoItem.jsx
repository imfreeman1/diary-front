import useOnClickOutside from '@/pages/hooks/useOnClickOutSide'
import React, { useRef, useState } from 'react'
import MonthEditModal from './MonthEditModal'

const MonthModalTodoItem = ({idx, todo, dayInfo}) => {
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
      <li key={idx} onClick={()=>handleItemModalOpen()} className="bg-red-100">{todo.text}</li>
      <div ref={editModalRef}>
        <MonthEditModal todo={todo} dayInfo={dayInfo} itemVisible={itemVisible} handleItemModalClose={handleItemModalClose}></MonthEditModal>
      </div>
    </>
  )
}

export default MonthModalTodoItem
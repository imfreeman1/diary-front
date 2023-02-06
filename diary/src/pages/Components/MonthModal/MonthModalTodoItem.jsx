import React, { useRef, useState } from 'react'
import MonthEditModal from './MonthEditModal'

const MonthModalTodoItem = ({idx, todo, dayInfo}) => {
  const [itemVisible, setItemVisible] = useState(false)
  const modalRef = useRef();

  const handleItemModalOpen = () =>{
    setTimeout(() => {
      setItemVisible(true)
    }, 300);
}
  const handleItemModalClose = () =>{
    setItemVisible(false)
  }

  const modalOutSideClick = (e) =>{
    console.log(modalRef.current)
    console.log(e.target)

    if(modalRef.current === e.target){
      setItemVisible(false)
    }
  }
  return (
    <>
        <li key={idx} onClick={()=>handleItemModalOpen()} className="bg-red-100">{todo.text}</li>
        <MonthEditModal ref={modalRef} modalOutSideClick={modalOutSideClick} todo={todo} dayInfo={dayInfo} itemVisible={itemVisible} handleItemModalClose={handleItemModalClose}></MonthEditModal>
    </>
  )
}

export default MonthModalTodoItem
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

  const onChildDbclick = (e) =>{
    e.stopPropagation()
  }
  return (
    <>
    <li key={idx} onClick={()=>handleItemModalOpen()} className="block truncate bg-gray-200 p-1 pl-2 my-2 mx-0.5 border-gray-400 border-2 rounded-xl hover:bg-gray-300 hover:border-gray-600 hover:cursor-pointer">{todo.text}</li>
    <div onDoubleClick={onChildDbclick} ref={editModalRef}>
        <MonthEditModal todo={todo} dayInfo={dayInfo} itemVisible={itemVisible} handleItemModalClose={handleItemModalClose}></MonthEditModal>
    </div>
    </>
  )
}

export default MonthTodoItem
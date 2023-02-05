import MonthInputModal from '@/pages/Components/MonthModal/MonthInputModal'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import MonthEditModal from '../MonthModal/MonthEditModal'

const MonthDate = ({dayInfo}) => {
  const [visible, setVisible] = useState(false)
  const [itemVisible, setItemVisible] = useState(false)

  const handleModalOpen = () =>{
      setTimeout(() => {
        setVisible(true)
      }, 300);
  }
  const handleItemModalOpen = () =>{
    setTimeout(() => {
      setItemVisible(true)
    }, 300);
}
  const handleModalClose = () =>{
    setVisible(false)
  }
  const handleItemModalClose = () =>{
    setItemVisible(false)
  }
  const {locdate} = dayInfo
  const {todos} = useSelector((state)=>state.todoReducer)
  console.log("todos", todos)
  return (
    <>
    <td onDoubleClick={()=>handleModalOpen()} className={`static border w-32 h-32 border-black font-bold text-lg ${dayInfo.isInMonth?dayInfo.isHoliday?"text-[#FF0000]":"text-black":"text-gray-400"}`}>{dayInfo.date} {dayInfo.dateName}
      <div>
        {todos.map((todo, idx)=>{
           return todo.date=== locdate ? 
           <>
           <li key={idx} onClick={()=>handleItemModalOpen()}>{todo.text}</li>
            <MonthEditModal todo={todo} dayInfo={dayInfo} itemVisible={itemVisible} handleItemModalClose={handleItemModalClose}></MonthEditModal>
            </>
           :null
        }
        )}
      </div>
      <MonthInputModal dayInfo={dayInfo} visible={visible} handleModalClose={handleModalClose}></MonthInputModal>

    </td>
    </>
  )
}

export default MonthDate

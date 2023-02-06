import MonthInputModal from '@/pages/Components/MonthModal/MonthInputModal'
import { openModal } from '@/Redux/action'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MonthEditModal from '../MonthModal/MonthEditModal'
import MonthModalTodoItem from '../MonthModal/MonthModalTodoItem'

const MonthDate = ({dayInfo}) => {
  const [visible, setVisible] = useState(false)
  const dispatch = useDispatch();

  const handleModalOpen = () =>{
      setTimeout(() => {
        setVisible(true)
      }, 300);
  }
  const handleModalClose = () =>{
    setVisible(false)
  }
  
  const {locdate} = dayInfo
  const {todos} = useSelector((state)=>state.todoReducer)
  console.log("todos", todos)
  return (
    <>
    <td onDoubleClick={()=>dispatch(openModal())} 
        className={`static overflow-hidden w-32 h-32 border border-black font-bold text-lg ${dayInfo.isInMonth?dayInfo.isHoliday?"text-[#FF0000]":"text-black":"text-gray-400"}`}>{dayInfo.date} {dayInfo.dateName}
      <div>
        {todos.map((todo, idx)=>{
           return todo.date=== locdate ? 
           <MonthModalTodoItem key={idx} todo={todo} dayInfo={dayInfo}></MonthModalTodoItem>
           :null
        }
        )}
      </div>
      {/* <MonthInputModal dayInfo={dayInfo} visible={visible} handleModalClose={handleModalClose}></MonthInputModal> */}

    </td>
    </>
  )
}

export default MonthDate

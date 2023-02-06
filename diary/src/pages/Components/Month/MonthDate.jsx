import MonthInputModal from '@/pages/Components/MonthModal/MonthInputModal'
import useOnClickOutside from '@/pages/hooks/useOnClickOutSide'
import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import MonthModalTodoItem from '../MonthModal/MonthModalTodoItem'

const MonthDate = ({dayInfo}) => {
  const [visible, setVisible] = useState(false)
  const inputModalRef = useRef()

  const handleModalOpen = () =>{
      setTimeout(() => {
        setVisible(true)
      }, 300);
  }

  const handleModalClose = () =>{
    setVisible(false)
  }
  useOnClickOutside(inputModalRef, () => setVisible(false))

  const {locdate} = dayInfo
  const {todos} = useSelector((state)=>state.todoReducer)
  console.log("todos", todos)
  return (
    <>
    <td onDoubleClick={()=>handleModalOpen()} className={`static border w-32 h-32 border-black font-bold text-lg ${dayInfo.isInMonth?dayInfo.isHoliday?"text-[#FF0000]":"text-black":"text-gray-400"}`}>{dayInfo.date} {dayInfo.dateName}
      <div>
        {todos.map((todo, idx)=>{
          return todo.date=== locdate ? 
            <MonthModalTodoItem idx={idx} todo={todo} dayInfo={dayInfo} />
          :null
        }
        )}
      </div>
      <div ref={inputModalRef}>
      <MonthInputModal dayInfo={dayInfo} visible={visible} handleModalClose={handleModalClose} />
      </div>
    </td>
    </>
  )
}

export default MonthDate

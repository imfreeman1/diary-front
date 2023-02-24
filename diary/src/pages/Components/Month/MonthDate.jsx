import MonthInputModal from '@/pages/Components/MonthModal/MonthInputModal'
import useOnClickOutside from '@/pages/hooks/useOnClickOutSide'
import React, { useRef, useState } from 'react'
import MonthTodo from './MonthTodo'
import MonthTodoItem from './MonthTodoItem'

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

  return (
    <>
    <td onDoubleClick={()=>handleModalOpen()} className="static border w-36 h-40 border-black "> 
      <div className={`font-bold text-md ${dayInfo.isInMonth?dayInfo.isHoliday?"text-[#FF0000]":"text-black":"text-gray-400"}`}>
        <span>{dayInfo.date} </span>
        <span>{dayInfo.dateName}</span>
      </div>
      <MonthTodo dayInfo={dayInfo}>
      </MonthTodo>
      <div ref={inputModalRef}>
        <MonthInputModal dayInfo={dayInfo} visible={visible} handleModalClose={handleModalClose} />
      </div>
    </td>
    </>
  )
}

export default MonthDate

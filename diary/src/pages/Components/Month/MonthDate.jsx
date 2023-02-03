import MonthModal from '@/pages/Components/Month/MonthModal'
import React, { useState } from 'react'

const MonthDate = ({dayInfo}) => {
  const [visible, setVisible] = useState(false)

  const handleModalOpen = () =>{
      setTimeout(() => {
        setVisible(true)
      }, 300);
  }
  const handleModalClose = () =>{
    setVisible(false)
  }
  return (
    <>
    <td onDoubleClick={()=>handleModalOpen()} className={`border w-32 h-32 border-black font-bold text-lg ${dayInfo.isInMonth?dayInfo.isHoliday?"text-[#FF0000]":"text-black":"text-gray-400"}`}>{dayInfo.date} {dayInfo.dateName}</td>
    <MonthModal dayInfo={dayInfo} visible={visible} handleModalClose={handleModalClose}></MonthModal>
    </>
  )
}

export default MonthDate

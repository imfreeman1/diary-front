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
    console.log(visible)

  }
  return (
    <>
    <td onDoubleClick={()=>handleModalOpen()} className={`border w-32 h-32 border-black ${dayInfo.isHoliday?"text-[#FF0000]":"text-black"}`}>{dayInfo.date} {dayInfo.dateName}</td>
    <MonthModal dayInfo={dayInfo} visible={visible} handleModalClose={handleModalClose}></MonthModal>
    </>
  )
}

export default MonthDate

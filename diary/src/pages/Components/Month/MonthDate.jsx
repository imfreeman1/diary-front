import MonthModal from '@/pages/Components/Month/MonthModal'
import React, { useState } from 'react'

const MonthDate = ({dayInfo}) => {
  const [visible, setVisible] = useState(false)
  const handleModalOpen = () =>{
      setVisible(true)
      console.log(visible)
  }
  const handleModalClose = () =>{
    setVisible(false)
  }
  const onClick=(dayInfo)=>{
    console.log({dayInfo})
  }
  return (
    <>
    <td onDoubleClick={handleModalOpen} className={`border w-32 h-32 border-black ${dayInfo.isHoliday?"text-[#FF0000]":"text-black"}`}>{dayInfo.date} {dayInfo.dateName}</td>
    <div>
    {visible?<MonthModal onClick={handleModalClose}></MonthModal>:undefined}
    </div>
    </>
  )
}

export default MonthDate

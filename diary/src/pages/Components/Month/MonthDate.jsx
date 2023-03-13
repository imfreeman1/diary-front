import React, { useRef, useState } from 'react'
import MonthTodo from './MonthTodo'
import MonthInputModal from '@/pages/Components/MonthModal/MonthInputModal'
import useOnClickOutside from '@/pages/hooks/useOnClickOutSide'

/**
 * 
 * @param {dayInfo} obj
 * @returns 
 */

// 파일 분리 presenter와, container로 분리를 해보자
const MonthDate = ({dayInfo}) => {
  // modal visible?
  const [visible, setVisible] = useState(false)
  const inputModalRef = useRef()

  const handleModalOpen = () =>{
    if(dayInfo.isInMonth){
      setTimeout(() => {
        setVisible(true)
      }, 300);
    }
  }

  const handleModalClose = () =>{
    setVisible(false)
  }
  useOnClickOutside(inputModalRef, () => setVisible(false))

  const onChildDbclick = (e) =>{
      e.stopPropagation()
  }
  return (
    <>
    <td onDoubleClick={()=>handleModalOpen()} className="static w-36 h-40 border border-gray-600"> 
      <div className={`${dayInfo.isInMonth?dayInfo.isHoliday?"text-[#FF0000]":"text-black":"text-gray-400"}`}>
        <span>{dayInfo.date} </span>
        <span className='text-sm'>{dayInfo.dateName}</span>
      </div>
      <MonthTodo dayInfo={dayInfo}/>
      <div onDoubleClick={onChildDbclick} ref={inputModalRef}>
        <MonthInputModal  dayInfo={dayInfo} visible={visible} handleModalClose={handleModalClose} />
      </div>
    </td>
    </>
  )
}

export default MonthDate

import React from 'react'
import { useSelector } from 'react-redux'
import MonthTodoItem from '../Month/MonthTodoItem'
import { BiX } from 'react-icons/bi'

const MonthListModal = ({ dayInfo, listVisible, handleListModalClose }) => {
  const {locdate} = dayInfo
  const {day} = dayInfo
  const {todos} = useSelector((state)=>state.todoReducer)
  console.log(dayInfo)
  return (
    (listVisible ?
    <div className='z-1 w-96 h-96 p-1 bg-white text-right rounded drop-shadow-2xl select-none'>
        <div className='flex m-3 justify-end'>
          <BiX onClick={()=>handleListModalClose()} size="25" className='rounded cursor-pointer hover:bg-gray-200' />
        </div>
        <div className='text-left px-3'>
          <p className='text-lg text-center text-blue-900 border-2'>{locdate} {day}</p>
        {todos[locdate]?
        todos[locdate].map((todo, idx)=>{
          return <MonthTodoItem idx={idx} todo={todo} dayInfo={dayInfo} />
        } 
        ): null}
        </div>
      </div>
      :null
      )
  )
}

export default MonthListModal
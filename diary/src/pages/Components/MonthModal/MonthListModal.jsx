import React from 'react'
import { useSelector } from 'react-redux'
import Button from '../Button'
import MonthTodoItem from '../Month/MonthTodoItem'

const MonthListModal = ({ dayInfo, listVisible, handleListModalClose }) => {
  console.log(dayInfo)
  const {locdate} = dayInfo
  const {todos} = useSelector((state)=>state.todoReducer)

  return (
    (listVisible ?
    <div onDoubleClick={()=>console.log(null)} className='z-1 w-96 h-96 bg-white text-right select-none rounded drop-shadow-2xl'>
        <div>
        <Button onClick={()=>handleListModalClose()} content="X" />
        </div>
        <div className='text-left p-5 bg-slate-100 '>{locdate}
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
import React from 'react'
import { useSelector } from 'react-redux'
import Button from '../Button'

const MonthListModal = ({ dayInfo, listVisible, handleListModalClose }) => {
  console.log(dayInfo)
  const {locdate} = dayInfo
  const {todos} = useSelector((state)=>state.todoReducer)

  return (
    (listVisible ?
      <div className='w-96 h-96 bg-white text-right select-none rounded drop-shadow-2xl'>
        <div>
        <Button onClick={()=>handleListModalClose()} content="X" />
        </div>
        <div className='text-left'>{locdate}
        {todos[locdate]?
        todos[locdate].map((todo, idx)=>{
          return <li key={idx} className="truncate bg-red-100 p-1 my-2">{todo.text}</li>
        } 
        ): null}
        </div>
      </div>
      :null
      )
    
  )
}

export default MonthListModal
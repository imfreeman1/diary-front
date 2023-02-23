import useOnClickOutside from '@/pages/hooks/useOnClickOutSide';
import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import Button from '../Button';
import MonthListModal from '../MonthModal/MonthListModal';
import MonthTodoItem from './MonthTodoItem';

const MonthTodo = ({dayInfo}) => {
  const [listVisible, setListVisible] = useState(false)
  const listModalRef = useRef()
  const handleListModalOpen = () => {
    setTimeout(()=> {
      setListVisible(true)
    }, 300)
  }
  const handleListModalClose = () =>{
    setListVisible(false)
  }

  useOnClickOutside(listModalRef, () => setListVisible(false))

  const {locdate} = dayInfo
  const {todos} = useSelector((state)=>state.todoReducer)
  const viewNum = todos[locdate]?(todos[locdate].length>3?2:3):false

  return (
    <>
    {todos[locdate]?
      todos[locdate].map((todo, idx)=>{
        if(idx<viewNum){
          return <MonthTodoItem idx={idx} todo={todo} dayInfo={dayInfo} />
        } 
        if(idx===viewNum){
          return <>
          <Button onClick={()=>handleListModalOpen()} content="더보기" />
          <div ref = {listModalRef}>
              <MonthListModal dayInfo={dayInfo} listVisible={listVisible} handleListModalClose={handleListModalClose}/>
          </div>
          </>
        }
        } 
        ): null}
    </>
  )
}

export default MonthTodo
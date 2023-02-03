import { delTodo, setTodo } from '@/Redux/action';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button';

const MonthModalTodo = ({dayInfo, handleModalClose}) => {
    const dispatch = useDispatch();
    const [text, setText] = useState("")
    
    const handleChange = (e) => {
      setText(e.target.value)
    };

    const handleKeyPress = (e) => {
        e.preventDefault()
        dispatch(setTodo(text))
        setText("");
      }
  
    const onDelete = (todo) => {
      dispatch(delTodo(todo));
      console.log(todo)
  
    };
    const {todos} = useSelector((state)=>state.todoReducer)
    console.log(todos)
  return (
    <div className='absolute inset-x-0 w-96 h-96 mx-auto bg-gray-200 text-center select-none rounded drop-shadow-md'>
        <div className='text-xl text-red-400 font-bold'>{dayInfo.locdate}</div>
      <div>todo
        <form  onSubmit={handleKeyPress}>
          <input placeholder='todo 입력하세요' value={text} onChange={handleChange} ></input>
        </form>
        <div className='text-left m-5 w-48 h-48 bg-white mx-auto'>
          {todos.map((todo, idx)=>(
            <li key={idx}>{todo.text}<Button onClick={()=>onDelete(todo)} content="DELETE" /></li>
          ))}
        </div>
        <div>
          <Button onClick={()=>handleModalClose()} content="CLOSE" />
        </div> 
      </div>
    </div>
  )
}

export default MonthModalTodo
import React from 'react'
import MonthModalTodo from './MonthModalTodo'

const MonthModal = ({dayInfo, visible, handleModalClose}) => {

  return (
    (visible ?
      <MonthModalTodo  dayInfo={dayInfo} handleModalClose={handleModalClose} ></MonthModalTodo>
    : null
    )
  )
}

export default MonthModal
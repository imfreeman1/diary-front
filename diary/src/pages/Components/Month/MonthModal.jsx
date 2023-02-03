import React from 'react'
import MonthModalTodo from './MonthModalTodo'

const MonthModal = ({dayInfo, visible, handleModalClose}) => {

  return (
    (visible && dayInfo.locdate ?
      <MonthModalTodo  dayInfo={dayInfo} handleModalClose={handleModalClose} />
    : null
    )
  )
}

export default MonthModal
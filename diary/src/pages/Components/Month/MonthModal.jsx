import React from 'react'
import Button from '../Button'

const MonthModal = (onClick) => {
  return (
    <div className='z-1 fixed w-96 h-96 bg-gray-400'>
        MonthModal
        <div>date</div>
        <div>todo</div>
        <div>
            <Button onClick={onClick} content="CLOSE">
            </Button>
        </div>    
    </div>
  )
}

export default MonthModal
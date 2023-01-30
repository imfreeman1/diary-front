import React from 'react'

const Button = ({ onClick, content, }) => {
  return (
    <button className='cursor-pointer' onClick={onClick}>{content}</button>
  )
}

export default Button
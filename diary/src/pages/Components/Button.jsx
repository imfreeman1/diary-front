import React from 'react'

const Button = ({ onClick, content, className }) => {
  return (
    <button className={`cursor-pointer ${className}`} onClick={onClick}>{content}</button>
  )
}

export default Button
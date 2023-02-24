import React from 'react'

const MenuBarButton = ({onClick, disabled, className, content}) => {
  return (
    <button
    onClick={()=>onClick()}
    disabled={disabled}
    className={`outline-none focus:outline-none border-r border-gray-200 w-20 h-10 hover:text-indigo-500 active:bg-gray-50 ${className}`}>
    {content}
  </button>
  )
}

export default MenuBarButton
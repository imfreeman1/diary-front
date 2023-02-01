import React from 'react'

const MenuBarButton = ({onClick, disabled, className, content}) => {
  return (
    <button
    onClick={()=>onClick()}
    disabled={disabled}
    className={`p-1 m-1 rounded-xl border-2 border-black hover:bg-slate-200 ${className}`}>
    {content}
  </button>
  )
}

export default MenuBarButton
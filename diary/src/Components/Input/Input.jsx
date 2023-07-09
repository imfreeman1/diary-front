import React from 'react'

const Input = ({placeholder, value, onChange, className, required, inputRef}) => {
  console.log('in Input', inputRef);
  return (
    <input placeholder={placeholder}
    value={value}
    ref={inputRef}
    onChange={onChange}
    className={className}
    required={required}/>
  )
}

export default React.memo(Input);
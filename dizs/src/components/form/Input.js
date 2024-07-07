import React from 'react'

const Input = ({type, name, value, placeholder, required, onChange, onKeyUp}) => {
  return (
    <>
      <input type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} onKeyUp={onKeyUp} required={required}/>
    </>
  )
}

export default Input

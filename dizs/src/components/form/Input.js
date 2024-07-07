import React from 'react'

const Input = ({type, name, required}) => {
  return (
    <>
      <input type={type} name={name} required={required}/>
    </>
  )
}

export default Input

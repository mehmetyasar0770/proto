import React from 'react'

const Button = ({ renk, children}) => {
  return (
    <button style={{color: renk}}> {children} </button>
  )
}

export default Button
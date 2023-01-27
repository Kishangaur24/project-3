import React from 'react'

const Button = ({ButtonText,handleClick , customCss}) => {
  return (
    <div>
      <button
      onClick={handleClick}
      className={customCss}
      >{ButtonText}</button>
    </div>
  )
}

export default Button

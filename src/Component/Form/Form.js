import React from 'react'
import Button from '../../Atom/button/Button'
import Style from './Form.module.css'

const Form = () => {
    function first(){
     alert("this is Subscribe button")
    }
    function second(){
    alert("this is GetStarted button")
    }
  return (
    <div>
      <h1>hii from component</h1>
      <Button
      ButtonText="Subscribe"
      handleClick={first}
      />
      <Button
      ButtonText="GetStarted"
      handleClick={second}
      customCss={Style.firstButton}
      />
    </div>
  )
}

export default Form

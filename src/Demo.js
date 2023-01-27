import React from 'react'
import { questions } from './const'
const Demo = () => {
  return (
    <div>
      {
        questions.map((element)=>{
            return(
                
                 <li>{element.text}</li>
               // <li>{element.options[0]}</li>
                
            )
        })
      }
    </div>
  )
}

export default Demo

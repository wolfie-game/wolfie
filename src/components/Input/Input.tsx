import React from 'react'
import { InputProps } from './types'

type Props = InputProps

const Input = (props: Props) => {
  return (
    <input 
      className={props.styleName} 
      type={props.type} 
      name={props.name} 
      value={props.value} 
      readOnly={props.readOnly} 
      placeholder={props.placeholder} 
      onChange={props.handler}
    />
  )
}

export default Input
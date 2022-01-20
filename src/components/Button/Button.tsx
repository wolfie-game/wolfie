import React from 'react'
import {ButtonProps} from './types'

const Button = (props: ButtonProps) => {
  return (
    <button
      className={props.styleName}
      type={props.type}
      onClick={props.handler}>
      {props.children}
    </button>
  )
}

export default Button

import React from 'react'
import { ButtonProps } from './types'

type Props = ButtonProps

const Button = (props: Props) => {
  return (
    <button className={props.styleName} type={props.type} onClick={props.handler}>{props.children}</button>
  )
}

export default Button
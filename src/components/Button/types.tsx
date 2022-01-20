import {MouseEventHandler} from 'react'

export type ButtonProps = {
  styleName?: string
  type: 'button' | 'submit' | 'reset' | undefined
  handler: MouseEventHandler
  children?: string
}

import React from 'react'
import {Link} from 'react-router-dom'
import {LinkProps} from './types'

type Props = LinkProps

const LinkItem = (props: Props) => {
  return (
    <Link className={props.styleName} to={props.goTo}>
      {props.children}
    </Link>
  )
}

export default LinkItem

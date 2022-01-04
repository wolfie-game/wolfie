import React from 'react'
import { ForumItemProps } from './types'

type Props = ForumItemProps

const ForumItem = (props: Props) => {
  return (
    <p className="simpple-page__text">{props.text}</p>
  )
}

export default ForumItem
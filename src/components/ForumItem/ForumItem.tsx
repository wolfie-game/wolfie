import React from 'react'
import {ForumItemProps} from './types'

type Props = ForumItemProps

const ForumItem = (props: Props) => {
  return <a onClick={props.openTopicView} className="simpple-page__text forum__link">{props.text}</a>
}

export default ForumItem

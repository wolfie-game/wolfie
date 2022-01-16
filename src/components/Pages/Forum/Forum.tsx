import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../Button/Button'
import ForumItem from '../../ForumItem/ForumItem'
import { DataMap } from './types'
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary'

const data = [
  {
    id: 1,
    text: 'How to play the game?',
  }, {
    id: 2,
    text: 'How to play the game?',
  }
]

function Forum() {
  const [messages] = useState(data)
  const navigate = useNavigate()
  
  return (
    <ErrorBoundary>
      <div className="content__canvas">
        <div className="simpple-page">
          <div className="simpple-page__heading">
            <h1 className="simpple-page__title">Forum</h1>
            <Button styleName="button-back" type="button" handler={() => navigate(-1)}></Button>
          </div>
          { messages && messages.map((item: DataMap) => <ForumItem key={item.id} text={item.text} />)}
        </div>
      </div>
    </ErrorBoundary>
  )
}
export default Forum

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../Button/Button'
import LeaderboardItem from '../../LeaderboardItem/LeaderboardItem'
import { DataMap } from './types'
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary'

const data = [
  {
    id: 1,
    user: 'Player 1',
    score: '10000' 
  }, {
    id: 2,
    user: 'Player 2',
    score: '130000' 
  }, {
    id: 3,
    user: 'Player 3',
    score: '15000' 
  }
]

function LeaderBoard() {
  const [leaders] = useState(data)
  const navigate = useNavigate()

  return (
    <ErrorBoundary>
      <div className="content__canvas">
        <div className="simpple-page">
          <div className="simpple-page__heading">
            <h1 className="simpple-page__title">Leaderboard</h1>
            <Button styleName="button-back" type="button" handler={() => navigate(-1)}></Button>
          </div>
          <div className="leaderboard">
            {leaders && leaders.map((item: DataMap) => 
              <LeaderboardItem key={item.id} user={item.user} score={item.score} />
            )}
          </div>
        </div>
      </div>
    </ErrorBoundary>
  )
}
export default LeaderBoard

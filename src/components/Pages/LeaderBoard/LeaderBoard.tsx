import React from 'react'
import { useNavigate } from 'react-router-dom'

function LeaderBoard() {
  const navigate = useNavigate();
  return (
    <div className="content__canvas">
      <div className="simpple-page">
        <div className="simpple-page__heading">
          <h1 className="simpple-page__title">Leaderboard</h1>
          <button className="button-back" onClick={() => navigate(-1)} type="button"></button>
        </div>
        <div className="leaderboard">
          <div className="leaderboard__row">
            <div className="leaderboard__col leaderboard__col_user">Player 1</div>
            <div className="leaderboard__col leaderboard__col_score">10000</div>
          </div>
          <div className="leaderboard__row">
            <div className="leaderboard__col leaderboard__col_user">Player 2</div>
            <div className="leaderboard__col leaderboard__col_score">10000</div>
          </div>
          <div className="leaderboard__row">
            <div className="leaderboard__col leaderboard__col_user">Player 3</div>
            <div className="leaderboard__col leaderboard__col_score">10000</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LeaderBoard

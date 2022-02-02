import React, {Component} from 'react'
import {connect} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import Button from '../../Button/Button'
import LeaderboardItem from '../../LeaderboardItem/LeaderboardItem'
import {DataMap} from './types'

const LeaderBoard = ({leaders}) => {
  const navigate = useNavigate()

  return (
    <div className="content__canvas">
      <div className="simpple-page">
        <div className="simpple-page__heading">
          <h1 className="simpple-page__title">Leaderboard</h1>
          <Button
            styleName="button-back"
            type="button"
            handler={() => navigate(-1)}></Button>
        </div>
        <div className="leaderboard">
          {leaders &&
            leaders.map((item: DataMap) => (
              <LeaderboardItem
                key={item.id}
                user={item.user}
                score={item.score}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    leaders: state.leaders,
  }
}

export default connect(mapStateToProps)(LeaderBoard)

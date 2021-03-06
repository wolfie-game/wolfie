import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Button from '../../Button/Button'
import LeaderboardItem from '../../LeaderboardItem/LeaderboardItem'
import {DataMap} from './types'
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary'
// import store from '../../../utils/redux/store'
import {connect} from 'react-redux'
import {fetchLeaders} from '../../../utils/redux/reducers/leaderboard'
import {PageMeta} from '../../PageMeta/PageMeta'

function LeaderBoard(props) {
  const navigate = useNavigate()

  useEffect(() => {
    props.dispatch(fetchLeaders())
    // console.log('checkin store', props)
  }, [])

  if(!props.user.auth) {
    return(
      <ErrorBoundary>
        <PageMeta title="Лидерборд" description="Рейтинг игроков"/>
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
              <h2 className="error-title">Авторизуйтесть</h2>
            </div>
          </div>
        </div>
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary>
      <PageMeta title="Лидерборд" description="Рейтинг игроков"/>
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
            {props.leaderboard.leaderboard && props.leaderboard.leaderboard.length > 0 ? (
              props.leaderboard?.leaderboard?.map((item: DataMap, index: number) => (
                  <LeaderboardItem
                    key={index}
                    user={item.data.user}
                    score={item.data.score}
                  />
              ))
            ) : (
              <p>...</p>
            )}
          </div>
        </div>
      </div>
    </ErrorBoundary>
  )
}

const ConnectedApp = connect((state) => {
  return state
})(LeaderBoard)

export default ConnectedApp

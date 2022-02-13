import React from 'react'

type LeaderboardItemProps = {
  user: string
  score: string
}

type Props = LeaderboardItemProps

const LeaderboardItem = (props: Props) => {
  return (
    <div className="leaderboard__row">
      <div className="leaderboard__col leaderboard__col_user">{props.user}</div>
      <div className="leaderboard__col leaderboard__col_score">
        {props.score}
      </div>
    </div>
  )
}

export default LeaderboardItem

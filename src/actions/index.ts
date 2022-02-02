import {ACTIONS} from '../constants'
import GameAPI from '../api/game-api'

const gameAPI = new GameAPI()

const leaderBoardLoaded = (leaderList) => {
  return {
    type: ACTIONS.SUCCESS,
    item: leaderList,
  }
}

const fetchLeaders =
  (leadersService = gameAPI) =>
  () =>
  (dispatch) => {
    leadersService
      .getLeaders()
      .then((data) => dispatch(leaderBoardLoaded(data)))
  }

export {fetchLeaders, leaderBoardLoaded}

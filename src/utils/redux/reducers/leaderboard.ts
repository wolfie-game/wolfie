import LeaderboardController from '../../../controllers/leaderboard'
import {call, put, takeEvery} from 'redux-saga/effects'
import store from '../store'

const LeaderboardDataRequester = new LeaderboardController()

const actions = {
  GET_LEADERS: 'GET_LEADERS',
  GET_LEADERS_SUCCEEDED: 'GET_LEADERS_SUCCEEDED',
  GET_LEADERS_FAILED: 'GET_LEADERS_FAILED'
}

const initialState = {
  leaderboard: []
};

export const leaderboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_LEADERS:
      return {
        ...state,
        leaderboard: null,
        loading: true,
        error: false,
      }
    case actions.GET_LEADERS_SUCCEEDED:
      return {
        ...state,
        leaderboard: action.payload,
        loading: false,
        error: false,
      }
    case actions.GET_LEADERS_FAILED:
      return {
        ...state,
        leaderboard: null,
        loading: false,
        error: true,
      }
    default:
      return state
  }
}

// Action Creators
const getLeaders = () => {
  return {type: actions.GET_LEADERS}
}

const getLeadersSuccess = (leadersData) => {
  return { type: 'GET_LEADERS_SUCCEEDED', payload: leadersData }
};

const getLeadersError = () => {
  return { type: actions.GET_LEADERS_FAILED }
};

export function fetchLeaders () {
  return { type: 'FETCHED_LEADERS' }
};

// Sagas
function* watchFetchLeaders() {
  yield takeEvery('FETCHED_LEADERS', fetchLeadersAsync)
}

function* fetchLeadersAsync() {
  try {
    yield put(getLeaders());
    const requestData = {
      ratingFieldName: "joker",
      cursor: 0,
      limit: 10
    }

    yield put(getLeaders())
    const data = yield call(() => {
      return LeaderboardDataRequester.getdata(requestData)
        .then(res => res)
      }
    )

    yield put(getLeadersSuccess(data));
  } catch (error) {
    yield put(getLeadersError());
  }
}

export default watchFetchLeaders

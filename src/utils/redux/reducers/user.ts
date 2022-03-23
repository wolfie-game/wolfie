import {Dispatch} from 'redux'

const actions = {
  CHECK_AUTH: 'CHECK_AUTH',
  CREATE_USER: 'CREATE_USER',
  LOGOUT: 'LOGOUT',
  GET_LEADERS: 'GET_LEADERS',
  SET_THEME: 'SET_THEME',
}

const initialState = {
  auth: false,
  value: null,
  theme: 'dark'
}

function userReducer(state = initialState, action) {
  switch (action.type) {
    case actions.CHECK_AUTH:
      return {
        auth: true,
        value: action.payload,
      }
    case actions.CREATE_USER:
      return {
        auth: true,
        value: action.payload,
      }
    case actions.LOGOUT:
      return {
        auth: false,
        value: null,
      }
    case actions.SET_THEME:
      return {
        ...state,
        theme: action.payload,
      }
    case actions.GET_THEME:
      return {
        ...state,
        theme: 'dark',
        loading: true,
        error: false,
      }
    case actions.GET_THEME_SUCCEEDED:
      return {
        ...state,
        theme: action.payload,
        loading: false,
        error: false,
      }
    case actions.GET_THEME_FAILED:
      return {
        ...state,
        leaderboard: 'dark',
        loading: false,
        error: true,
      }
    default:
      return state
  }
}
export function checkAuth(userData) {
  return {type: actions.CHECK_AUTH, payload: {...userData}}
}
export function createUser(userData) {
  return {type: actions.CREATE_USER, payload: {...userData}}
}
export function logout() {
  return {type: actions.LOGOUT}
}

const getTheme = () => {
  return {type: actions.GET_THEME}
}

export function fetchTheme() {
  return {type: 'FETCHED_THEME'}
}

// Sagas
export function* watchFetchTheme() {
  yield takeEvery('FETCHED_THEME', fetchThemeAsync)
}

function* fetchThemeAsync(ownerId) {
  try {
    yield put(getTheme())

    const data = yield call(() => {
      return ThemeService.getTheme({ownerId}).then((res) => res)
    })

    yield put(getThemeSuccess(data))
  } catch (error) {
    yield put(getThemeError())
  }
}

const getThemeSuccess = (themeData) => {
  return {type: 'GET_THEME_SUCCEEDED', payload: themeData}
}

const getThemeError = () => {
  return {type: actions.GET_THEME_FAILED}
}

export default userReducer

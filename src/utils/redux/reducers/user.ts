import {Dispatch} from 'redux'
import {call, put, takeEvery} from 'redux-saga/effects'
import ThemeAPI from '../../../api/theme-api'

const actions = {
  CHECK_AUTH: 'CHECK_AUTH',
  CREATE_USER: 'CREATE_USER',
  LOGOUT: 'LOGOUT',
  GET_THEME: 'GET_THEME',
  GET_THEME_SUCCEEDED: 'GET_THEME_SUCCEEDED',
  GET_THEME_FAILED: 'GET_THEME_FAILED',
  SET_THEME: 'SET_THEME',
  SET_THEME_SUCCEEDED: 'SET_THEME_SUCCEEDED',
  SET_THEME_FAILED: 'GET_THEME_FAILED',
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
        loading: true,
        error: false,
      }
    case actions.SET_THEME_SUCCEEDED:
      return {
        ...state,
        theme: action.payload,
        loading: false,
        error: false,
      }
    case actions.SET_THEME_FAILED:
      return {
        ...state,
        theme: 'dark',
        loading: false,
        error: true,
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
        theme: 'dark',
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

export function fetchTheme(ownerId) {
  return {type: 'FETCHED_THEME', ownerId: ownerId}
}

// Sagas
export function* watchFetchTheme() {
  yield takeEvery('FETCHED_THEME', fetchThemeAsync)
}

function* fetchThemeAsync(action) {
  const {type, ownerId} = action

  try {
    yield put(getTheme())

    const data = yield call(() => {
      return ThemeAPI.getTheme(ownerId).then((res) => res)
    })
    console.log('fetchThemeAsync data', data)
    data = !data.error ? {payload: {theme: 'dark'}} : data
    yield put(getThemeSuccess(data))
  } catch (error) {
    console.log('fetchThemeAsync error', error)
    yield put(getThemeError())
  }
}

const getThemeSuccess = (themeData) => {
  return {type: 'GET_THEME_SUCCEEDED', payload: themeData}
}

const getThemeError = () => {
  return {type: actions.GET_THEME_FAILED}
}

// Set theme
const setTheme = () => {
  return {type: actions.SET_THEME}
}

export function fetchSetTheme(theme, ownerId) {
  return {type: 'FETCHED_SET_THEME', theme: theme, ownerId: ownerId}
}

export function* watchFetchSetTheme() {
  yield takeEvery('FETCHED_SET_THEME', fetchSetThemeAsync)
}

function* fetchSetThemeAsync(action) {
  const {type, ownerId, theme} = action
  console.log('fetchSetThemeAsync ownerId', ownerId)
  console.log('fetchSetThemeAsync theme', theme)
  try {
    yield put(setTheme())

    const data = yield call(() => {
      return ThemeAPI.postTheme({ownerId: ownerId, theme: theme}).then((res) => res)
    })

    yield put(setThemeSuccess(data))
  } catch (error) {
    yield put(setThemeError())
  }
}

const setThemeSuccess = (themeData) => {
  return {type: 'SET_THEME_SUCCEEDED', payload: themeData}
}

const setThemeError = () => {
  return {type: actions.SET_THEME_FAILED}
}

export default userReducer

import {Dispatch} from 'redux'
import {call, put, takeEvery} from 'redux-saga/effects'
import TopicAPI from '../../../api/topic-api'

const actions = {
  GET_TOPICS: 'GET_TOPICS',
  GET_TOPICS_SUCCEEDED: 'GET_TOPICS_SUCCEEDED',
  GET_TOPICS_FAILED: 'GET_TOPICS_FAILED',
  ADD_TOPIC: 'ADD_TOPIC',
  ADD_TOPIC_SUCCEEDED: 'ADD_TOPIC_SUCCEEDED',
  ADD_TOPIC_FAILED: 'ADD_TOPIC_FAILED',
  GET_TOPIC: 'GET_TOPICS',
  GET_TOPIC_SUCCEEDED: 'GET_TOPICS_SUCCEEDED',
  GET_TOPIC_FAILED: 'GET_TOPICS_FAILED',
}

const initialState = {
  // auth: false,
  // value: null,
  // theme: 'dark',
  topics: null
}

function topicReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_TOPICS:
      return {
        ...state,
        loading: true,
        error: false,
      }
    case actions.GET_TOPICS_SUCCEEDED:
      return {
        ...state,
        topics: action.payload,
        loading: false,
        error: false,
      }
    case actions.GET_TOPICS_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
      }
    case actions.ADD_TOPIC:
      return {
        ...state,
        loading: true,
        error: false,
      }
    case actions.ADD_TOPIC_SUCCEEDED:
      return {
        ...state,
        topic: action.payload,
        loading: false,
        error: false,
      }
    case actions.ADD_TOPIC_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
      }
    case actions.GET_TOPIC:
      return {
        ...state,
        loading: true,
        error: false,
      }
    case actions.GET_TOPIC_SUCCEEDED:
      return {
        ...state,
        topic: action.payload,
        loading: false,
        error: false,
      }
    case actions.GET_TOPIC_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
      }
    default:
      return state
  }
}

// Get all topics
const getTopics = () => {
  return {type: actions.GET_TOPICS}
}

export function fetchTopics() {
  return {type: 'FETCHED_TOPICS'}
}

export function* watchFetchTopics() {
  yield takeEvery('FETCHED_TOPICS', fetchTopicsAsync)
}

function* fetchTopicsAsync() {
  try {
    yield put(getTopics())

    const data = yield call(() => {
      return TopicAPI.getTopics().then((res) => res)
    })

    const topicsData = !data.error ? {payload: {topics: data}} : data
    yield put(getTopicsSuccess(topicsData))
  } catch (error) {
    yield put(getTopicsError())
  }
}

const getTopicsSuccess = (data) => {
  return {type: 'GET_TOPICS_SUCCEEDED', payload: data}
}

const getTopicsError = () => {
  return {type: actions.GET_TOPICS_FAILED}
}

// Add topic
const addTopic = () => {
  return {type: actions.ADD_TOPIC}
}

export function fetchAddTopic(title, content, authorId) {
  return {type: 'FETCHED_ADD_TOPIC', title: title, content: content, authorId: authorId}
}

export function* watchFetchAddTopic() {
  yield takeEvery('FETCHED_ADD_TOPIC', fetchAddTopicAsync)
}

function* fetchAddTopicAsync(action) {
  const {title, content, authorId} = action
  // console.log('fetchAddTopicAsync title', title)
  // console.log('fetchAddTopicAsync content', content)
  // console.log('fetchAddTopicAsync authorId', authorId)
  try {
    yield put(addTopic())

    const data = yield call(() => {
      return TopicAPI.postTopic({title: title, content: content, authorId: authorId}).then((res) => res)
    })

    yield put(addTopicSuccess(data))
  } catch (error) {
    yield put(addTopicError())
  }
}

const addTopicSuccess = (data) => {
  return {type: 'ADD_TOPIC_SUCCEEDED', payload: data}
}

const addTopicError = () => {
  return {type: actions.ADD_TOPIC_FAILED}
}

// Get topic
const getTopic = () => {
  return {type: actions.GET_TOPIC}
}

export function fetchGetTopic(id) {
  return {type: 'FETCHED_GET_TOPIC', id: id}
}

export function* watchFetchGetTopic() {
  yield takeEvery('FETCHED_GET_TOPIC', fetchGetTopicAsync)
}

function* fetchGetTopicAsync(action) {
  const {id} = action

  try {
    yield put(getTopic())

    const data = yield call(() => {
      return TopicAPI.getTopic({id: id}).then((res) => res)
    })

    yield put(getTopicSuccess(data))
  } catch (error) {
    yield put(getTopicError())
  }
}

const getTopicSuccess = (data) => {
  return {type: 'GET_TOPIC_SUCCEEDED', payload: data}
}

const getTopicError = () => {
  return {type: actions.GET_TOPIC_FAILED}
}

export default topicReducer

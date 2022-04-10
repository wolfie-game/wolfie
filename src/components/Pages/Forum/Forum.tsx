import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Button from '../../Button/Button'
import ForumItem from '../../ForumItem/ForumItem'
import {DataMap} from './types'
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary'
import {PageMeta} from '../../PageMeta/PageMeta'
import {topicService} from '../../../server-db/services/TopicService'
import ForumModal from '../../ForumModal/ForumModal'
import NewModal from '../../NewModal/NewModal'
import {connect} from 'react-redux'
import {fetchTopics} from '../../../utils/redux/reducers/topic'
import {fetchAddTopic} from '../../../utils/redux/reducers/topic'

import './Forum.scss'

export interface TopicListItem {
  id: number
  authorInfo: {
    avatar: string
    login: string
  }
  title: string
  content: string
  commentsCount: number
}

//const topicsInstance = new TopicController()

type TopicList = TopicListItem[]

function Forum(props) {
  const initialState = {
    data: [
      {
        id: 1,
        topic: 'Как играть в игру?',
        messages: [
          {
            id: 1,
            user: 3,
            userName: 'Олег',
            message: 'Всем привет! Как играть в игру?'
          },
          {
            id: 2,
            user: 2,
            userName: 'Сегрей',
            message: 'Привет!) Всё просто - двигаешь волка кнопками Q W A S, ловишь падающие яйца, зарабатываешь очки'
          },
          {
            id: 3,
            user: 3,
            userName: 'Олег',
            message: 'Понял, спасибо!'
          },
        ]
      },
      {
        id: 2,
        topic: 'Есть ли приз за первое место?',
        messages: [
          {
            id: 1,
            user: 1,
            userName: 'Маша',
            message: 'Привет! Есть ли приз за первое место?'
          },
          {
            id: 2,
            user: 2,
            userName: 'Сегрей',
            message: 'Привет! Пока точно об этом ничего не слышал, но ходили слухи на форуме, что скоро за первое место по итогам месяца будут давать футболку'
          },
          {
            id: 3,
            user: 1,
            userName: 'Маша',
            message: 'Вау! Нужно потренироваться...'
          },
        ]
      },
      {
        id: 3,
        topic: 'Рейтинг игорков',
        messages: [
          {
            id: 1,
            user: 1,
            userName: 'Маша',
            message: 'Привет всем! Как увидеть список лидеров?'
          },
          {
            id: 2,
            user: 2,
            userName: 'Сегрей',
            message: 'Привет! Для того чтобы увидеть список лидеров тебе нужно авторизоваться в игре и перейти в раздел Лидерборд'
          },
          {
            id: 3,
            user: 1,
            userName: 'Маша',
            message: 'Спасибо'
          },
        ]
      },
    ],
    modal: false,
    modalNew: false,
    topicView: {},
    activeTopicIndex: 1
  }
  const [state, setState] = useState(initialState)
  const [topicList, setTopicList] = useState<TopicList>([])
  const navigate = useNavigate()

  const openTopicView = (topicId) => {
    const topicViewDataIndex = state.data.findIndex(element => element.id == topicId)
    const topicViewData = state.data[topicViewDataIndex]
    setState({
      ...state, 
      modal: true, 
      topicView: topicViewData, 
      activeTopicIndex: topicViewDataIndex
    })
  }

  const openNewTopic = () => {
    setState({
      ...state, 
      modalNew: true,
    })
  }

  const hideModal = () => {
    setState({
      ...state, 
      modal: false, 
      modalNew: false,
      topicView: {}, 
      activeTopicIndex: 1
    })
  }

  const submitUpdate = (message) => {
    let newMessage = {
      user: props.user?.value?.id,
      userName: 'Вы',
      message: message
    }
    let data = [...state.data]
    data[state.activeTopicIndex]['messages'].push(newMessage)
    setState({
      ...state,
      data: data,
    })
  }

  const addTopic = (data) => {
    props.dispatch(fetchAddTopic(data.topic, data.message, props.user.value.id))
  }

  useEffect(() => {
    props.dispatch(fetchTopics())
  }, [])

  return (
    <ErrorBoundary>
      <ForumModal
        handleClose={hideModal}
        show={state.modal}
        data={state.topicView}
        submitUpdate={submitUpdate}
      />
      <NewModal
        handleClose={hideModal}
        show={state.modalNew}
        addTopic={addTopic}
      />
      <PageMeta title="Форум" description="Wolfie форум" />
      <div className="content__canvas">
        <div className="simpple-page">
          <div className="simpple-page__heading">
            <h1 className="simpple-page__title">Forum</h1>
            <Button
              styleName="button-close"
              type="button"
              handler={() => navigate(-1)}>
            </Button>
          </div>
          {!props.topic.topics?.error && (
            props.topic.topics?.map((item: DataMap) => (
              <ForumItem key={item.id} text={item.title} openTopicView={() => openTopicView(item.id)} />
            ))
          )}
          <div>
            <Button styleName="forum__new-topic" type="button" handler={openNewTopic}>Начать новое обсуждение</Button>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  )
}

const ConnectedApp = connect((state) => {
  console.log('forum state', state)
  return state
})(Forum)

export default ConnectedApp

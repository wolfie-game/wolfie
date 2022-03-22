import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Button from '../../Button/Button'
import ForumItem from '../../ForumItem/ForumItem'
import {DataMap} from './types'
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary'
import {PageMeta} from '../../PageMeta/PageMeta'
import {topicService} from '../../../server-db/services/TopicService'

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
const data = [
  {
    id: 1,
    text: 'How to play the game?',
  },
  {
    id: 2,
    text: 'How to play the game?',
  },
]
type TopicList = TopicListItem[]

function Forum() {
  const [topicList, setTopicList] = useState<TopicList>([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Forum page')
        const data = await topicService.getAllTopics()
        /*const topics = data.map((item: Record<string, unknown>) => {
          return {
            id: item.id,
            title: item.title,
            content: item.content,
            commentsCount: item.comments_count,
            authorInfo: {
              avatar: item.avatar ? item.avatar : '',
              login: item.login,
            },
          }
        })
        setTopicList(topics)*/
      } catch (e) {
        console.log(e)
      }
    }
    fetchData()
  }, [])

  return (
    <ErrorBoundary>
      <PageMeta title="Форум" description="Wolfie форум" />
      <div className="content__canvas">
        <div className="simpple-page">
          <div className="simpple-page__heading">
            <h1 className="simpple-page__title">Forum</h1>
            <Button
              styleName="button-back"
              type="button"
              handler={() => navigate(-1)}></Button>
          </div>
          {/*messages &&
            messages.map((item: DataMap) => (
              <ForumItem key={item.id} text={item.text} />
            ))*/}
        </div>
      </div>
    </ErrorBoundary>
  )
}
export default Forum

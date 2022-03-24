import BaseRESTService from './BaseRESTServise'
import {
  Topic,
  TopicCreateAttributes,
  TopicUpdateAttributes,
} from '../models/topic'

export type NewTopic = {
  authorId: number;
  content: string;
  title: string;
}

class TopicService implements BaseRESTService {
  getAllTopics() {
    return fetch('/topics').then((response) => response.data)
  }

  getTopic(id: number) {
    return fetch(`/topics?id=${id}`).then((response) => response.data)
  }

  postTopic(data: NewTopic) {
    return fetch('/topics/create', {
      method: 'POST',
      body: JSON.stringify({data}),
    })
  }
}

export const topicService = new TopicService()

import TopicsAPI from '../api/topics-api'
interface Topic {
  authorId: number
  content: string
  title: string
}

const topicsInstance = new TopicsAPI()

export default class TopicController {
  public async getAllTopics() {
    try {
      console.log('getting all topics')
      let response = await topicsInstance.getAllTopics()
      return response
    } catch (error) {
      alert('Error during getting topics!')
    }
  }
  public async getTopics() {
    try {
      let response = await topicsInstance.getTopic(id)
      return response
    } catch (error) {
      alert('Error during getting topic!')
    }
  }
  public async postTopic(data: Topic) {
    try {
      let response = await topicsInstance.postTopic(data)
      return response
    } catch (error) {
      alert('Error during posting topic!')
    }
  }
}

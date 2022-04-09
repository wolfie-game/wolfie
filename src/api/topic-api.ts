import FetchRequest from '../utils/FetchRequest'

const host = '/topics'
const topicAPIInstance = new FetchRequest(`${host}`)

class TopicAPI {
  getTopics() {
    return topicAPIInstance
      .get('')
      .then((response) => {
        console.log('TopicAPI getTopics response', response)
        return response.json()
      })
      .catch(function (error) {
        alert(error)
      })
  }

  postTopic(data) {
    return topicAPIInstance
      .post('/create', {data: data})
      .then((response) => {
        return response.json()
      })
      .catch(function (error) {
        alert(error)
      })
  }

  getTopic(id: number): Promise<void> {
    return topicAPIInstance
      .get(`?ownerId=${id}`)
      .then((response) => {
        return response.json()
      })
      .catch((reject) => {
        throw new Error(reject)
      })
  }

  updateTopic(data) {
    return topicAPIInstance
      .post('/update', {data: data})
      .then((response) => {
        return response.json()
      })
      .catch((reject) => {
        throw new Error(reject)
      })
  }

}

export default new TopicAPI()

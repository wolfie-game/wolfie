import FetchRequest from '../utils/FetchRequest'

const host = 'https://ya-praktikum.tech/api/v2'
const leaderboardAPIInstance = new FetchRequest(`${host}`)

const testData = {
  ratingFieldName: "score",
  cursor: 0,
  limit: 10,
}

export default class LeaderboardAPI {
  getLeader(testData) {
    return leaderboardAPIInstance
      .post('/leaderboard/darry', {data: testData})
      .then((response) => {
        return response.json()
      })
      .catch((reject) => {
        throw new Error(reject)
      })
  }

  addLeader(userData) {
    console.log('userData', userData)
    return leaderboardAPIInstance
      .post('/leaderboard', {data: userData})
      .then((response) => {
        // console.log('userData response', response)
        return response.statusText
      })
      .catch((reject) => {
        throw new Error(reject)
      })
  }
}

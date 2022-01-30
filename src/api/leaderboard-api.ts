import FetchRequest from '../utils/FetchRequest'

const host = 'https://ya-praktikum.tech/api/v2/leaderboard'

const leaderboardAPIInstance = new FetchRequest(`${host}`)

const testData = {
  ratingFieldName: "joker",
  cursor: 0,
  limit: 10000
}

export default class LeaderboardAPI {
  getLeader(testData) {
    return leaderboardAPIInstance
      .post('/all', {data: testData})
      .then((response) => {
        return response.json()
      })
      .catch((reject) => {
        throw new Error(reject)
      })
  }
}

import LeaderboardAPI from '../api/leaderboard-api'

const leaderboardInstance = new LeaderboardAPI()

export default class LeaderboardController {
  public async getdata(data) {
    try {
      const response = await leaderboardInstance.getLeader(data)
      return response
    } catch (error) {
      console.log('error:', error)
    }
  }

  public async addData(data) {
    try {
      const response = await leaderboardInstance.addLeader(data)
      return response
    } catch (error) {
      console.log('error:', error)
    }
  }
}

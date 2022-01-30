import LeaderboardAPI from '../api/leaderboard-api'

// interface LoginFormModel {
//   login: string
//   password: string
// }

const leaderboardInstance = new LeaderboardAPI()

export default class LeaderboardController {

  public async getdata(data) {
    try {
      let response = await leaderboardInstance.getLeader(data)
      return response
    } catch (error) {
      console.log('error:', error);
    }
  }
}

import FetchRequest from '../utils/FetchRequest'
import {HOST} from '../constants'

const userAPIInstance = new FetchRequest(`${HOST}/user`)

export default class UserAPI {
  updatePassword(oldPassword, newPassword) {
    return userAPIInstance
      .put('/password', {data: {oldPassword, newPassword}})
      .then((response) => {
        return response.json()
      })
      .catch((reject) => {
        throw new Error(reject)
      })
  }
}

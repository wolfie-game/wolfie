import FetchRequest from '../utils/FetchRequest'

const host = 'https://ya-praktikum.tech/api/v2/user'

const userAPIInstance = new FetchRequest(`${host}`)

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

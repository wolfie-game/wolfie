import FetchRequest from '../utils/FetchRequest'

const host = '/user'
const userAPIInstance = new FetchRequest(`${host}`)

export default class UserAPIDB {
  postUser(data) {
    console.log('UserAPIDB create data', data)
    return userAPIInstance
      .post('/create', {data: data})
      .then((response) => {
        return response.json()
      })
      .catch(function (error) {
        alert(error)
      })
  }
}

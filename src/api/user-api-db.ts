import FetchRequest from '../utils/FetchRequest'
// import {Request, Response} from 'express'
// import {userService} from "../server-db/services/UserService"

const host = '/user'
const userAPIInstance = new FetchRequest(`${host}`)

export default class UserAPIDB {
  create(data) {
    console.log('UserAPIDB create data', data)
    return userAPIInstance
      .post('/create', {id: data.id, login: data.login})
      .then((response) => {
        return response.json()
      })
      .catch(function (error) {
        alert(error)
      })
  }
}

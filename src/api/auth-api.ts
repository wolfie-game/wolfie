import FetchRequest from '../utils/FetchRequest'
import {HOST} from '../constants'

const authAPIInstance = new FetchRequest(`${HOST}/auth`)

export default class AuthAPI {
  signup(data) {
    return authAPIInstance
      .post('/signup', {
        data: {
          first_name: 'User',
          second_name: 'User',
          phone: '+71111111111',
          ...data,
        },
      })
      .then(() => {
        return this.getUserInfo()
      })
      .catch((reject) => {
        throw new Error(reject)
      })
  }

  signin(data) {
    return authAPIInstance
      .post('/signin', {data})
      .then(() => {
        return this.getUserInfo()
      })
      .catch((reject) => {
        throw new Error(reject)
      })
  }

  getUserInfo() {
    return authAPIInstance
      .get('/user')
      .then((response) => {
        return response.json()
      })
      .catch(function (error) {
        throw new Error(error)
      })
  }

  logout() {
    return authAPIInstance.post('/logout').catch(function (error) {
      throw new Error(error)
    })
  }
}

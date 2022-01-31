import FetchRequest from '../utils/FetchRequest'

const host = 'https://ya-praktikum.tech/api/v2/auth'

const authAPIInstance = new FetchRequest(`${host}`)

export default class AuthAPI {
  signup(data) {
    return authAPIInstance
      .post('/signup', {
        data: {
          first_name: 'User-name',
          second_name: 'User-second-name',
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
        alert(error)
      })
  }

  logout() {
    return authAPIInstance.post('/logout').catch(function (error) {
      alert(error)
    })
  }
}

import FetchRequest from '../utils/FetchRequest'

const host = 'https://ya-praktikum.tech/api/v2/user'

const oauthAPIInstance = new FetchRequest(`${host}`)

export default class OauthAPI {
  getAppId() {
    return oauthAPIInstance
      .get('/oauth/yandex/service-id', {
        params: {
            redirect_uri: 'http://localhost:3000',
        },
      })
      .then((response) => {
        let resp = response.json()
        return resp
      })
      .catch(function (error) {
        alert(error)
      })
  }

  getOauthToken(code: string) {
    return oauthAPIInstance
      .post('/oauth/yandex', {
        redirect_uri: 'http://localhost:3000',
        code,
      })
      .then((response) => {
        console.log('getOauthToken response', response)
        // return response
      })
      .catch((reject) => {
        throw new Error(reject)
      })
  }

}

import FetchRequest from '../utils/FetchRequest'

const host = 'https://ya-praktikum.tech/api/v2'
const oauthAPIInstance = new FetchRequest(`${host}`)
const redirectURI = 'http://localhost:5000'

export default class OauthAPI {
  getAppId() {
    return oauthAPIInstance
      .get(`/oauth/yandex/service-id?redirect_uri=${redirectURI}`)
      .then((response) => {
        return response.json()
      })
      .catch(function (error) {
        alert(error)
      })
  }

  getOauthToken(serviceId: string) {
    return oauthAPIInstance
      .post('/oauth/yandex', {
        data: {
          redirect_uri: redirectURI,
          code: serviceId,
        },
      })
      .then((response) => {
        console.log('API getOauthToken response', response)
      })
      .catch((reject) => {
        throw new Error(reject)
      })
  }
}

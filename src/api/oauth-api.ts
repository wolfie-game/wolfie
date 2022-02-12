import FetchRequest from '../utils/FetchRequest'

const host = 'https://ya-praktikum.tech/api/v2/'
const oauthAPIInstance = new FetchRequest(`${host}`)
const redirectURI = 'localhost:3000'


export default class OauthAPI {
  getAppId() {
    return oauthAPIInstance
      .get(`/oauth/yandex/service-id?redirect_uri=${redirectURI}`)
      .then((response) => {
        let resp = response.json()
        return resp
      })
      .catch(function (error) {
        alert(error)
      })
  }

  getOauthToken(serviceId: string) {
    return oauthAPIInstance
      .post('/oauth/yandex', {
        redirect_uri: redirectURI,
        serviceId,
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

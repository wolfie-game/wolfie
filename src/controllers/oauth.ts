import oauthAPI from '../api/oauth-api'

const oauthInstance = new oauthAPI()

export default class OauthController {
  public async getAppId() {
    try {
      const resp = await oauthInstance.getAppId()
      return resp
    } catch (error) {
      alert(error)
    }
  }

  public async getOauthToken(serviceId: string) {
    try {
      const resp = await oauthInstance.getOauthToken(serviceId)
      return resp
    } catch (error) {
      alert(error)
    }
  }
}

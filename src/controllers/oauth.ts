import oauthAPI from '../api/oauth-api'

// interface LoginFormModel {
//   login: string
//   password: string
// }

const oauthInstance = new oauthAPI()

export default class OauthController {
  public async getAppId() {
    try {
      let resp = await oauthInstance.getAppId()
      console.log('OauthController id', resp)
      return resp
    } catch (error) {
      alert(error)
    }
  }

  public async getOauthToken() {
    try {
      let resp = await oauthInstance.getAppId()
      console.log('OauthController token', resp)
      return resp
    } catch (error) {
      alert(error)
    }
  }
  // public async signin(data: LoginFormModel) {
  //   try {
  //     let response = await authInstance.signin(data)
  //     return response
  //   } catch (error) {
  //     alert('Wrong login or password!')
  //   }
  // }
  // public async signup(data) {
  //   try {
  //     let response = await authInstance.signup(data)
  //     return response
  //   } catch (error) {
  //     alert('This email already in use!')
  //   }
  // }
  
  // public async logout() {
  //   try {
  //     await authInstance.logout()
  //   } catch (error) {
  //     alert(error)
  //   }
  // }
  // public async changePassword(oldPwd, newPwd) {
  //   try {
  //     let resp = await userInstance.updatePassword(oldPwd, newPwd)
  //     return resp
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
}

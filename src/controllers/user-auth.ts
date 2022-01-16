import AuthAPI from '../api/auth-api'

interface LoginFormModel {
  login: string
  password: string
}

const authInstance = new AuthAPI()

export default class UserAuthController {
  public async signin(data: LoginFormModel) {
    try {
      await authInstance.signin(data)
    } catch (error) {
      alert('Wrong login or password!')
    }
  }
  public async signup(data) {
    try {
      await authInstance.signup(data)
    } catch (error) {
      alert('This email already in use!')
    }
  }
  public async getUserInfo() {
    try {
      console.log('WE`RE GETTING HERE')
      let resp = await authInstance.getUserInfo()
      return resp
    } catch (error) {
      alert(error)
    }
  }
}

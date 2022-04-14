import AuthAPI from '../api/auth-api'
import UserAPI from '../api/user-api'
import UserAPIDB from '../api/user-api-db'

interface LoginFormModel {
  login: string
  password: string
}

const authInstance = new AuthAPI()
const userInstance = new UserAPI()
const userInstanceDB = new UserAPIDB()

export default class UserAuthController {
  public async signin(data: LoginFormModel) {
    try {
      let response = await authInstance.signin(data)
      return response
    } catch (error) {
      alert('Wrong login or password!')
    }
  }
  public async signup(data) {
    try {
      let response = await authInstance.signup(data)
      if (response) {
        // TopicAPI.postTopic({title: title, content: content, authorId: authorId}).then((res) => res)
        userInstanceDB.postUser({id: response.id, login: response.login})
        console.log('signup response', response)
      }
      
      // return response
    } catch (error) {
      alert('This email already in use!')
    }
  }
  public async getUserInfo() {
    try {
      let resp = await authInstance.getUserInfo()
      return resp
    } catch (error) {
      alert(error)
    }
  }
  public async logout() {
    try {
      await authInstance.logout()
    } catch (error) {
      alert(error)
    }
  }
  public async changePassword(oldPwd, newPwd) {
    try {
      let resp = await userInstance.updatePassword(oldPwd, newPwd)
      return resp
    } catch (error) {
      console.log(error)
    }
  }
}
